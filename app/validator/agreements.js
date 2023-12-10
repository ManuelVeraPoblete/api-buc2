const {check } = require('express-validator')
const { validateResult} = require('../helpers/validateHelper')

const valGetAgreement = [
    check('RUT').exists().not().isEmpty(),
    (req, res, next ) => {
        validateResult(req, res, next)
    }
]
const valGetAgrementBenefist = [
    check('RUT').exists().not().isEmpty(),
    (req, res, next ) => {
        validateResult(req, res, next)
    }
]
const valGetAgreementContactInfo = [
    check('RUT').exists().not().isEmpty(),
    (req, res, next ) => {
        validateResult(req, res, next)
    }
]
const valGetAgreementEmployees = [
    check('RUT').exists().not().isEmpty(),
    (req, res, next ) => {
        validateResult(req, res, next)
    }
]

const valGetAgreementFinancial = [
    check('RUT').exists().not().isEmpty(),
    (req, res, next ) => {
        validateResult(req, res, next)
    }
]

const valGetAgreementParties = [
    check('RUT').exists().not().isEmpty(),
    (req, res, next ) => {
        validateResult(req, res, next)
    }
]
const valGetCoverage = [
    check('RUT').exists().not().isEmpty(),
    (req, res, next ) => {
        validateResult(req, res, next)
    }
]
const valGetInvestimentFund = [
    check('RUT').exists().not().isEmpty(),
    (req, res, next ) => {
        validateResult(req, res, next)
    }
]

const valGetLoan = [
    check('RUT').exists().not().isEmpty(),
    (req, res, next ) => {
        validateResult(req, res, next)
    }
]

const valGetSavingsInfo = [
    check('RUT').exists().not().isEmpty(),
    (req, res, next ) => {
        validateResult(req, res, next)
    }
]

const valSearchAgreements = [
    check('RUT').exists().not().isEmpty(),
    (req, res, next ) => {
        validateResult(req, res, next)
    }
]

const valSearchCoverages = [
    check('RUT').exists().not().isEmpty(),
    (req, res, next ) => {
        validateResult(req, res, next)
    }
]

const valSearchEndorsements = [
    check('RUT').exists().not().isEmpty(),
    (req, res, next ) => {
        validateResult(req, res, next)
    }
]

const valSearchInvestimentFundQuotaValue = [
    check('RUT').exists().not().isEmpty(),
    (req, res, next ) => {
        validateResult(req, res, next)
    }
]

const valSearchInvestimentFunds = [
    check('RUT').exists().not().isEmpty(),
    (req, res, next ) => {
        validateResult(req, res, next)
    }
]

const valSearchLoans = [
    check('RUT').exists().not().isEmpty(),
    (req, res, next ) => {
        validateResult(req, res, next)
    }
]

const valUpdateBanckInformation = [
    check('RUT').exists().not().isEmpty(),
    (req, res, next ) => {
        validateResult(req, res, next)
    }
]

const valUpdateProductContactInfo = [
    check('RUT').exists().not().isEmpty(),
    (req, res, next ) => {
        validateResult(req, res, next)
    }
]

const valUpdateProductContactInfoOnlyAddresses = [
    check('RUT').exists().not().isEmpty(),
    (req, res, next ) => {
        validateResult(req, res, next)
    }
]

const valUpdateProductContactInfoOnlyEmails = [
    check('RUT').exists().not().isEmpty(),
    (req, res, next ) => {
        validateResult(req, res, next)
    }
]

const valUpdateProductContactInfoOnlyPhones = [
    check('RUT').exists().not().isEmpty(),
    (req, res, next ) => {
        validateResult(req, res, next)
    }
]

const valSearchAgreementsFilter = [
    check('RUT').exists().not().isEmpty(),
    (req, res, next ) => {
        validateResult(req, res, next)
    }
]

const valGetSavingsBackendInfo = [
    check('RUT').exists().not().isEmpty(),
    (req, res, next ) => {
        validateResult(req, res, next)
    }
]

module.exports = { valGetAgreement, valGetAgrementBenefist, valGetAgreementContactInfo, valGetAgreementEmployees,
                   valGetAgreementFinancial, valGetAgreementParties, valGetCoverage, valGetInvestimentFund,
                   valGetLoan, valGetSavingsInfo, valSearchAgreements, valSearchCoverages, valSearchEndorsements,
                   valSearchInvestimentFundQuotaValue, valSearchInvestimentFunds, valSearchLoans, 
                   valUpdateBanckInformation, valUpdateProductContactInfo, valUpdateProductContactInfoOnlyAddresses,
                   valUpdateProductContactInfoOnlyEmails, valUpdateProductContactInfoOnlyPhones, 
                   valSearchAgreementsFilter, valGetSavingsBackendInfo  }