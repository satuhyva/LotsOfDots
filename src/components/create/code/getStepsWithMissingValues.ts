import { StepType } from '../../../types/create-voting/StepType'
import { StepsWithValuesType } from '../../../types/create-voting/StepsWithValuesType'

export const getStepsWithMissingValues = (stepsWithValues: StepsWithValuesType): StepType[] => {
    return stepsWithValues.filter(step => {
        if (step.value === undefined && step.label !== 'code') return true
        if (step.index === 1) {
            const optionsList = step.value as string[]
            return optionsList.length < 2
        }
    })
}