const { httpError} = require('../helpers/handleError')


const getAgreement = (req, res) =>{
    try {
         console.log('agreements')
         res.send({ data: 'ejecutado getAgreement Agreement Service' })
    } catch (e) {
        httpError(res, e)
    }
}

const getAgrementBenefist = (req, res) =>{
    try {
          console.log('agreements')
         res.send({ data: 'ejecutado getAgrementBenefist Agreement Service' })
    } catch (e) {
        httpError(res, e)
    }
}

const getAgreementContactInfo = (req, res) =>{
    try {
        console.log('agreements')
        res.send({ data: 'ejecutado getAgreementContactInfo Agreement Service' })
    } catch (e) {
        httpError(res, e)
    }
}

const getAgreementEmployees = (req, res) =>{
    try {
        console.log('agreements')
        res.send({ data: 'ejecutado getAgreementEmployees Agreement Service' })
    } catch (e) {
        httpError(res, e)
    }
}

const getAgreementFinancial = (req, res) =>{
    try {
        console.log('agreements')
        res.send({ data: 'ejecutado getAgreementFinancial Agreement Service' })
    } catch (e) {
        httpError(res, e)
    }
}

const getAgreementParties = (req, res) =>{
    try {
        console.log('agreements')
        res.send({ data: 'ejecutado getAgreementParties Agreement Service' })
    } catch (e) {
        httpError(res, e)
    }
}

const getCoverage = (req, res) =>{
    try {
        console.log('agreements')
        res.send({ data: 'ejecutado getCoverage Agreement Service' })
    } catch (e) {
        httpError(res, e)
    }
}

const getInvestimentFund = (req, res) =>{
    try {
        console.log('agreements')
        res.send({ data: 'ejecutado getInvestimentFund Agreement Service' })
    } catch (e) {
        httpError(res, e)
    }
}
const getLoan = (req, res) =>{
    try {
        console.log('agreements')
        res.send({ data: 'ejecutado getLoan Agreement Service' })
    } catch (e) {
        httpError(res, e)
    }
}

const getSavingsInfo = (req, res) =>{
    try {
        console.log('agreements')
        res.send({ data: 'ejecutado getSavingsInfo Agreement Service' })
    } catch (e) {
        httpError(res, e)
    }
}

const searchAgreements = (req, res) =>{
    try {
        console.log('agreements')
        res.send({ data: 'ejecutado searchAgreements Agreement Service' })
    } catch (e) {
        httpError(res, e)
    }
}

const searchCoverages = (req, res) =>{
    try {
        console.log('agreements')
        res.send({ data: 'ejecutado searchCoverages Agreement Service' })
    } catch (e) {
        httpError(res, e)
    }
}

const searchEndorsements = (req, res) =>{
    try {
        console.log('agreements')
        res.send({ data: 'ejecutado searchEndorsements Agreement Service' })
    } catch (e) {
        httpError(res, e)
    }
}

const searchInvestimentFundQuotaValue = (req, res) =>{
    try {
        console.log('agreements')
        res.send({ data: 'ejecutado searchInvestimentFundQuotaValue Agreement Service' })
    } catch (e) {
        httpError(res, e)
    }
}

const searchInvestimentFunds = (req, res) =>{
    try {
        console.log('agreements')
        res.send({ data: 'ejecutado searchInvestimentFunds Agreement Service' })
    } catch (e) {
        httpError(res, e)
    }
}

const searchLoans = (req, res) =>{
    try {
        console.log('agreements')
        res.send({ data: 'ejecutado searchLoans Agreement Service' })
    } catch (e) {
        httpError(res, e)
    }
}

const updateBanckInformation = (req, res) =>{
    try {
        console.log('agreements')
        res.send({ data: 'ejecutado updateBanckInformation Agreement Service' })
    } catch (e) {
        httpError(res, e)
    }
}

const updateProductContactInfo = (req, res) =>{
    try {
        console.log('agreements')
        res.send({ data: 'ejecutado updateProductContactInfo Agreement Service' })
    } catch (e) {
        httpError(res, e)
    }
}

const updateProductContactInfoOnlyAddresses = (req, res) =>{
    try {
        console.log('agreements')
        res.send({ data: 'ejecutado updateProductContactInfoOnlyAddresses Agreement Service' })
    } catch (e) {
        httpError(res, e)
    }
}

const updateProductContactInfoOnlyEmails = (req, res) =>{
    try {
        console.log('agreements')
        res.send({ data: 'ejecutado updateProductContactInfoOnlyEmails Agreement Service' })
    } catch (e) {
        httpError(res, e)
    }
}

const updateProductContactInfoOnlyPhones = (req, res) =>{
    try {
        console.log('agreements')
        res.send({ data: 'ejecutado updateProductContactInfoOnlyPhones Agreement Service' })
    } catch (e) {
        httpError(res, e)
    }
}

const searchAgreementsFilter = (req, res) =>{
    try {
        console.log('agreements')
        res.send({ data: 'ejecutado searchAgreementsFilter Agreement Service' })
    } catch (e) {
        httpError(res, e)
    }
}

const getSavingsBackendInfo = (req, res) =>{
    try {
        console.log('agreements')
        res.send({ data: 'ejecutado getSavingsBackendINfo Agreement Service' })
    } catch (e) {
        httpError(res, e)
    }
}


module.exports = { getAgreement, getAgrementBenefist, getAgreementContactInfo, getAgreementEmployees,
                   getAgreementFinancial, getAgreementParties, getCoverage, getInvestimentFund,
                   getLoan, getSavingsInfo, searchAgreements, searchCoverages, searchEndorsements,
                   searchInvestimentFundQuotaValue, searchInvestimentFunds, searchLoans, updateBanckInformation,
                   updateProductContactInfo, updateProductContactInfoOnlyAddresses, updateProductContactInfoOnlyEmails,
                   updateProductContactInfoOnlyPhones, searchAgreementsFilter, getSavingsBackendInfo }