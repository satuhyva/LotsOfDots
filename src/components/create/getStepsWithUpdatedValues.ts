import { StepsWithValues } from '../../types/StepsWithValues'
import { Step } from '../../types/StepsWithValues'


const indexesAreSame = (item: Step, updatedStep: Step): boolean => {
    if (item.index === updatedStep.index) {
        return true
    }
    return false
}

const labelsAreSame = (item: Step, updatedStep: Step): boolean => {
    if (item.index === updatedStep.index && item.label === updatedStep.label) {
        return true
    }
    return false
}

const valueIsOfCorrectType = (updatedStep: Step): boolean => {
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
 


export const getStepsWithUpdatedValues = (
    stepWithUpdatedValue: Step,
    stepsWithValues: StepsWithValues
): StepsWithValues => {
    const updatedSteps = stepsWithValues.map(item => {
        if (indexesAreSame(item, stepWithUpdatedValue) && labelsAreSame(item, stepWithUpdatedValue) && valueIsOfCorrectType(stepWithUpdatedValue)) {
            return { ...stepWithUpdatedValue }
        } else {
            return { ...item }
        }
    }) as StepsWithValues
    return updatedSteps
}