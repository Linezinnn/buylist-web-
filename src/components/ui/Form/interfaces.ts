import { FieldValues, UseFormSetValue } from "react-hook-form"
import { CreateItemFormData } from "../../../pages/Home/Header/FormSchema"
import { CreateCategoryFormType } from "../../../pages/Home/components/CreateCategoryModal/FormSchema"

export type GetValueType = (name: ItemNameType | CategoryNameType, value: string | number) => any

export type ItemNameType = keyof CreateItemFormData
export type CategoryNameType = keyof CreateCategoryFormType

type AllFormSchemaTypes<T extends FieldValues> = UseFormSetValue<T>

type CombinedFormType = CreateItemFormData | CreateCategoryFormType;
export type CombinedFormSetValue = AllFormSchemaTypes<CombinedFormType>;