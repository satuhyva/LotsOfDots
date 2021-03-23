import { StepsWithValuesType } from '../../../types/create-voting/StepsWithValuesType'
import { StepType } from '../../../types/create-voting/StepType'


 
export const getStepsWithUpdatedValues = (
    stepWithUpdatedValue: StepType,
    stepsWithValues: StepsWithValuesType
): StepsWithValuesType => {
    const updatedSteps = stepsWithValues.map(item => {
        if (indexesAreSame(item, stepWithUpdatedValue) && labelsAreSame(item, stepWithUpdatedValue) && valueIsOfCorrectType(stepWithUpdatedValue)) {
            return { ...stepWithUpdatedValue }
        } else {
            return { ...item }
        }
    }) as StepsWithValuesType
    return updatedSteps
}



const indexesAreSame = (item: StepType, updatedStep: StepType): boolean => {
    if (item.index === updatedStep.index) {
        return true
    }
    return false
}

const labelsAreSame = (item: StepType, updatedStep: StepType): boolean => {
    if (item.index === updatedStep.index && item.label === updatedStep.label) {
        return true
    }
    return false
}

const valueIsOfCorrectType = (updatedStep: StepType): boolean => {
    switch (updatedStep.label) {
    case 'question':
        return typeof updatedStep.value === 'string'
    case 'options':
        return Array.isArray(updatedStep.value) && updatedStep.value.every(item => typeof item === 'string')
    case 'count':
        return typeof updatedStep.value === 'number'
    case 'identity':
        return typeof updatedStep.value === 'boolean'
    case 'code':
        return typeof updatedStep.value === 'string'
    default:
        return false
    }
}