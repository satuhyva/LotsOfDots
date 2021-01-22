
import { StepsWithValues, Step } from '../../../types/StepsWithValues'

export const getStepsWithMissingValues = (stepsWithValues: StepsWithValues): Step[] => {
    return stepsWithValues.filter(step => {
        if (step.value === undefined && step.label !== 'code') return true
        if (step.index === 1) {
            const optionsList = step.value as string[]
            return optionsList.length < 2
        }
    })
}