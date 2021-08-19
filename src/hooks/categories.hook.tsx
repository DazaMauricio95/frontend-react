import { MUIDataTableColumnDef } from "mui-datatables";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { stateSelector, typeOption } from "../@types";
import { actionsCategories } from "../redux/actions";
export const UseHookCategories = () => {
  const dispatch = useDispatch();
  const {
    loadingCategory,
    disabledCategory,
    responseCategories,
    dataCategories,
  } = useSelector((state: stateSelector) => state.categoriesReducer);
  const [numPage, setNumPage] = useState<number>(1);
  const [optionsCategories, setOptionsCategories] = useState<typeOption[]>([]);
  const [openCategories, setOpenCategories] = useState<boolean>(false);

  const callbackCategories = useCallback(
    async () => dispatch(actionsCategories.paginationCategories(numPage)),
    [dispatch, numPage]
  );

  const callbackAllCategories = useCallback(async () => {
    dispatch(actionsCategories.getCategories());
  }, [dispatch]);

  useEffect(() => {
    setOptionsCategories(
      dataCategories.map((item) => {
        return {
          value: item.IdCategory,
          text: item.nameCategory,
        };
      })
    );
  }, [dataCategories]);

  const columns: MUIDataTableColumnDef[] = [
    {
      name: "nameCategory",
      label: "Categoría",
    },
    {
      name: "description",
      label: "Descripción",
    },
    {
      name: "countBooks",
      label: "Libros",
    },
  ];

  function handleNextPage(event: ChangeEvent<unknown>, value: number) {
    setNumPage(value);
  }

  return {
    loadingCategory,
    disabledCategory,
    responseCategories,
    dataCategories,
    numPage,
    handleNextPage,
    columns,
    callbackCategories,
    optionsCategories,
    setOptionsCategories,
    openCategories,
    setOpenCategories,
    callbackAllCategories,
  };
};
