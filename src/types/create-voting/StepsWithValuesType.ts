

// export type Question = { index: number, label: string, value: string | undefined }
// export type Options = { index: number, label: string, value: string[] | undefined }
// export type Count = { index: number, label: string, value: number | undefined }
// export type Identity = { index: number, label: string, value: boolean | undefined }
// export type Code = { index: number, label: string, value: boolean | undefined }
// export type Step = Question | Options | Count | Identity | Code

import { CodeType } from './CodeType'
import { CountType } from './CountType'
import { IdentityType } from './IdentityType'
import { OptionsType } from './OptionsType'
import { QuestionType } from './QuestionType'

export type StepsWithValuesType = [QuestionType, OptionsType, CountType, IdentityType, CodeType]
