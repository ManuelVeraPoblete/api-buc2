const {check } = require('express-validator')
const { validateResult} = require('../helpers/validateHelper')

const valDummy = [
    check('agreementId').exists().not().isEmpty(),
    check('partyId').exists().not().isEmpty(),
    check('RUT').exists().not().isEmpty(),
    check('agreementNumber').exists().not().isEmpty(),
    check('BackendId').exists().not().isEmpty(),
    (req, res, next ) => {
        validateResult(req, res, next)
    }
]
const valGetEmployee = [ // RUT, advisorCode
    check('RUT').exists().not().isEmpty(),
    check('advisorCode').exists().not().isEmpty(),
    (req, res, next ) => {
        validateResult(req, res, next)
    }
]

// Probando commit

const valGetOrganization = [ // RUT
    check('RUT').exists().not().isEmpty(),
    (req, res, next ) => {
        validateResult(req, res, next)
    }
]

const valGetParty = [ // RUT
    check('RUT').exists().not().isEmpty(),
    (req, res, next ) => {
        validateResult(req, res, next)
    }
]

const valGetPartyContactInfo = [ // RUT
    check('RUT').exists().not().isEmpty(),
    (req, res, next ) => {
        validateResult(req, res, next)
    }
]

const valGetPartyCustomerSegment = [ // RUT
    check('RUT').exists().not().isEmpty(),
    (req, res, next ) => {
        validateResult(req, res, next)
    }
]

const valGetPerson = [ // RUT
    check('RUT').exists().not().isEmpty(),
    (req, res, next ) => {
        validateResult(req, res, next)
    }
]

const valSearchCustomerRequirements = [ 
    check('partyRut').exists().not().isEmpty(),
    check('partyId').exists().not().isEmpty(),
    check('broadLineOfBusinessId').exists().not().isEmpty(),
    check('lineOfBusinessId').exists().not().isEmpty(),
    check('customerContactOperationId').exists().not().isEmpty(),
    check('customerContactChanelId').exists().not().isEmpty(),    
    check('creationDateSince').exists().not().isEmpty(),    
    check('creationDateUntil').exists().not().isEmpty(),    
    (req, res, next ) => {
        validateResult(req, res, next)
    }
]

const valUpdatePartyContactInfo = [ 
    check('address').exists().not().isEmpty(),
    check('comuneId').exists().not().isEmpty(),
    check('countryId').exists().not().isEmpty(),
    check('emergencyContactEmail').exists().not().isEmpty(),
    check('emergencyContactName').exists().not().isEmpty(),
    check('partyRut').exists().not().isEmpty(),    
    check('emergencyContactPhone').exists().not().isEmpty(),    
    check('mobileNumber').exists().not().isEmpty(),    
    check('primaryEmail').exists().not().isEmpty(),    
    check('secundaryEmail').exists().not().isEmpty(),    
    check('tertiaryEmail').exists().not().isEmpty(),    
    (req, res, next ) => {
        validateResult(req, res, next)
    }
]

const valUpdatePartyContactInfoOnlyEmails = [ 
    check('partyRut').exists().not().isEmpty(),    
    check('primaryEmail').exists().not().isEmpty(),    
    check('secundaryEmail').exists().not().isEmpty(),    
    check('tertiaryEmail').exists().not().isEmpty(),    
    (req, res, next ) => {
        validateResult(req, res, next)
    }
]

const valUpdatePartyContactInfoOnlyAdresses = [ 
    check('address').exists().not().isEmpty(),    
    check('comuneId').exists().not().isEmpty(),    
    check('countryId').exists().not().isEmpty(),    
    check('partyRut').exists().not().isEmpty(),    
    check('regionId').exists().not().isEmpty(),    
    (req, res, next ) => {
        validateResult(req, res, next)
    }
]

const valUpdatePartyContactInfoOnlyPhones = [ 
    check('emergencyContactPhone').exists().not().isEmpty(),    
    check('mobileNumber').exists().not().isEmpty(),    
    check('partyRut').exists().not().isEmpty(),    
    check('PhoneNumber').exists().not().isEmpty(),    
    (req, res, next ) => {
        validateResult(req, res, next)
    }
]

const valUpdatePersonContactInfo = [ 
    check('address').exists().not().isEmpty(),    
    check('codePostal').exists().not().isEmpty(),    
    check('comuneId').exists().not().isEmpty(),    
    check('hasDefaulted').exists().not().isEmpty(),    
    check('lastUserUpdate').exists().not().isEmpty(),    
    check('mobileNumber').exists().not().isEmpty(),    
    check('partyId').exists().not().isEmpty(),    
    check('partyRut').exists().not().isEmpty(),    
    check('personLocationKind').exists().not().isEmpty(),    
    check('phoneNumber').exists().not().isEmpty(),    
    check('primaryEmail').exists().not().isEmpty(),    
    check('regionId').exists().not().isEmpty(),    
    check('userRut').exists().not().isEmpty(),    

    (req, res, next ) => {
        validateResult(req, res, next)
    }
]
module.exports = { valDummy, valGetEmployee, valGetOrganization, valGetParty, valGetPartyContactInfo, valGetPartyCustomerSegment, valGetPerson,
                   valSearchCustomerRequirements, valUpdatePartyContactInfo, valUpdatePartyContactInfoOnlyAdresses, valUpdatePartyContactInfoOnlyEmails,
                   valUpdatePartyContactInfoOnlyPhones, valUpdatePersonContactInfo
                }