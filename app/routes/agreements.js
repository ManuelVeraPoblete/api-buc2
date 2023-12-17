const express = require('express')
const router = express.Router()


const { valGetAgreement, valGetAgrementBenefist, valGetAgreementContactInfo, valGetAgreementEmployees } = require('../validator/agreements')
const { valGetAgreementFinancial, valGetAgreementParties, valGetCoverage, valGetInvestimentFund} = require('../validator/agreements')
const { valGetLoan, valGetSavingsInfo, valSearchAgreements, valSearchCoverages, valSearchEndorsements} = require('../validator/agreements')
const { valSearchInvestimentFundQuotaValue, valSearchInvestimentFunds, valSearchLoans} = require('../validator/agreements') 
const { valUpdateBanckInformation, valUpdateProductContactInfo, valUpdateProductContactInfoOnlyAddresses} = require('../validator/agreements')
const { valUpdateProductContactInfoOnlyEmails, valUpdateProductContactInfoOnlyPhones} = require('../validator/agreements') 
const { valSearchAgreementsFilter, valGetSavingsBackendInfo } = require('../validator/agreements')


const {getAgreement, getAgrementBenefist, getAgreementContactInfo} = require('../controlles/agreements')
const {getAgreementEmployees, getAgreementFinancial, getAgreementParties} = require('../controlles/agreements')
const {getCoverage, getInvestimentFund, getLoan, getSavingsInfo} = require('../controlles/agreements')
const {searchAgreements, searchCoverages, searchEndorsements} = require('../controlles/agreements')
const {searchInvestimentFundQuotaValue, searchInvestimentFunds} = require('../controlles/agreements')
const {searchLoans, updateBanckInformation, updateProductContactInfo} = require('../controlles/agreements')
const {updateProductContactInfoOnlyAddresses, updateProductContactInfoOnlyEmails} = require('../controlles/agreements')
const {updateProductContactInfoOnlyPhones, searchAgreementsFilter, getSavingsBackendInfo} = require('../controlles/agreements')


router.post('/getAgreement',                          valGetAgreement,                          getAgreement)
router.post('/getAgrementBenefist',                   valGetAgrementBenefist,                   getAgrementBenefist)
router.post('/getAgreementContactInfo',               valGetAgreementContactInfo,               getAgreementContactInfo)
router.post('/getAgreementEmployees',                 valGetAgreementEmployees,                 getAgreementEmployees)
router.post('/getAgreementFinancial',                 valGetAgreementFinancial,                 getAgreementFinancial)
router.post('/getAgreementParties',                   valGetAgreementParties,                   getAgreementParties)
router.post('/getCoverage',                           valGetCoverage,                           getCoverage)
router.post('/getInvestimentFund',                    valGetInvestimentFund,                    getInvestimentFund)
router.post('/getLoan',                               valGetLoan,                               getLoan)
router.post('/getSavingsInfo',                        valGetSavingsInfo,                        getSavingsInfo)
router.post('/searchAgreements',                      valSearchAgreements,                      searchAgreements)
router.post('/searchCoverages',                       valSearchCoverages,                       searchCoverages)
router.post('/searchEndorsements',                    valSearchEndorsements,                    searchEndorsements)
router.post('/searchInvestimentFundQuotaValue',       valSearchInvestimentFundQuotaValue,       searchInvestimentFundQuotaValue)
router.post('/searchInvestimentFunds',                valSearchInvestimentFunds,                searchInvestimentFunds)
router.post('/searchLoans',                           valSearchLoans,                           searchLoans)
router.post('/updateBanckInformation',                valUpdateBanckInformation,                updateBanckInformation)
router.post('/updateProductContactInfo',              valUpdateProductContactInfo,              updateProductContactInfo)
router.post('/updateProductContactInfoOnlyAddresses', valUpdateProductContactInfoOnlyAddresses, updateProductContactInfoOnlyAddresses)
router.post('/updateProductContactInfoOnlyEmails',    valUpdateProductContactInfoOnlyEmails,    updateProductContactInfoOnlyEmails)
router.post('/updateProductContactInfoOnlyPhones',    valUpdateProductContactInfoOnlyPhones,    updateProductContactInfoOnlyPhones)
router.post('/searchAgreementsFilter',                valSearchAgreementsFilter,                searchAgreementsFilter)
router.post('/getSavingsBackendInfo',                 valGetSavingsBackendInfo,                  getSavingsBackendInfo)
                                                      

module.exports = router