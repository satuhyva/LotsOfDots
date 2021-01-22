

export type Question = { index: number, label: string, value: string | undefined }
export type Options = { index: number, label: string, value: string[] | undefined }
export type Count = { index: number, label: string, value: number | undefined }
export type Identity = { index: number, label: string, value: boolean | undefined }
export type Code = { index: number, label: string, value: boolean | undefined }
export type Step = Question | Options | Count | Identity | Code

export type StepsWithValues = [Question, Options, Count, Identity, Code]
