import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from "axios";
import { modelUser } from "../models";
import { config } from "./config";
import store from "../redux/store";
import { constantsAlert } from "../redux/constants";
import { actionsLogin } from "../redux/actions";
const timeout = 9000;
const { dispatch }: any = store;
const api = axios.create({
  baseURL: config.urlApi,
});
const isHandlerEnabled = async (config: any) => {
  return config.hasOwnProperty("handlerEnabled") && !config.handlerEnabled
    ? false
    : true;
};
const requestHandler = async (request: AxiosRequestConfig) => {
  if (isHandlerEnabled(request)) {
    if (modelUser.token && localStorage.getItem("@token")) {
      request.headers.Authorization =
        `Bearer ` + localStorage.getItem("@token");
    }
  }
  return request;
};
const errorHandler = (error: AxiosError) => {
  let message = "";
  if (typeof error !== "undefined") {
    if (error.hasOwnProperty("message")) {
      if (error.message === "Network Error") {
        message = "Error de red o servidores.";
      } else if (error.message === "timeout of " + timeout + "ms exceeded") {
        message = "Tiempo excedido de ejecución, error de red o servidores.";
      } else {
        message = error.message;
      }
    }
  }
  if (typeof error.response !== "undefined") {
    if (error.response.status === 401) {
      message = "No autorizado.";
      dispatch(actionsLogin.logoutUser());
    } else if (error.response.status === 404) {
      message = "Falta la ruta API o no está definida";
    } else if (error.response.status === 405) {
      message = "Método de ruta API no permitido";
    } else if (error.response.status === 422) {
      message = "El recurso bloqueado y no se puede entregar al navegador.";
    } else if (error.response.status >= 500) {
      message = "Error del Servidor";
    }
    if (
      error.hasOwnProperty("response") &&
      error.response.hasOwnProperty("data")
    ) {
      if (
        error.response.data.hasOwnProperty("message") &&
        error.response.data.message.length > 0
      ) {
        message = error.response.data.message;
        if (typeof error.response.data.errors !== "undefined") {
          const { errors } = error.response.data;
          console.log("MESSAGE DATA ERROR: ", errors);
        }
      }
    }
  }
  dispatch(
    constantsAlert.VIEW({
      message: message,
      description: "",
      duration: 5,
      placement: "topRight",
      type: "error",
    })
  );
  return Promise.reject({ ...error });
};
const successhandler = async (response: AxiosResponse) => {
  if (isHandlerEnabled(response.config)) {
  }
  return response;
};
api.interceptors.request.use((request) => requestHandler(request));
api.interceptors.response.use(
  (response) => successhandler(response),
  (error) => errorHandler(error)
);
export const API = api;
