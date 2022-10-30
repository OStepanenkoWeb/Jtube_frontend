import { TextareaHTMLAttributes } from 'react'

import { IFieldProps } from '@/components/ui/fields/field.interface'

type TypeInputPropsField = TextareaHTMLAttributes<HTMLTextAreaElement> &
	IFieldProps

export interface ITextArea extends TypeInputPropsField {}
