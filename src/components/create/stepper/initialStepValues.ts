import { StepsWithValuesType } from '../../../types/create-voting/StepsWithValuesType'


const labels = ['question', 'options', 'count', 'identity', 'code']

export const initialStepValues = [0,1,2,3,4].map(number => {
    return (
        { index: number, label: labels[number], value: undefined }
    )
}) as StepsWithValuesType