const express = require('express')
const router = express.Router()

const { dummy, getEmployee, getOrganization, getParty, getPartyContactInfo, getPartyCustomerSegment} = require('../controlles/partys')
const { getPerson, searchCustomerRequirements, updatePartyContactInfo} = require('../controlles/partys')
const { updatePartyContactInfoOnlyAdresses, updatePartyContactInfoOnlyEmails} = require('../controlles/partys')
const { updatePartyContactInfoOnlyPhones, updatePersonContacInfo } = require('../controlles/partys')

const { valDummy, valGetEmployee, valGetOrganization, valGetParty } = require('../validator/partys')
const { valGetPartyContactInfo, valGetPartyCustomerSegment, valGetPerson } = require('../validator/partys')
const { valSearchCustomerRequirements, valUpdatePartyContactInfo } = require('../validator/partys')
const { valUpdatePartyContactInfoOnlyAdresses, valUpdatePartyContactInfoOnlyEmails } = require('../validator/partys')
const { valUpdatePartyContactInfoOnlyPhones, valUpdatePersonContactInfo } = require('../validator/partys')


router.post('/dummy',                              valDummy,                              dummy)
router.post('/getEmployee',                        valGetEmployee,                        getEmployee)
router.post('/getOrganization',                    valGetOrganization,                    getOrganization)
router.post('/getParty',                           valGetParty,                           getParty)
router.post('/getPartyContactInfo',                valGetPartyContactInfo,                getPartyContactInfo)
router.post('/getPartyCustomerSegment',            valGetPartyCustomerSegment,            getPartyCustomerSegment)
router.post('/getPerson',                          valGetPerson ,                         getPerson)
router.post('/searchCustomerRequirements',         valSearchCustomerRequirements,         searchCustomerRequirements)
router.post('/updatePartyContactInfo',             valUpdatePartyContactInfo,             updatePartyContactInfo)
router.post('/updatePartyContactInfoOnlyAdresses', valUpdatePartyContactInfoOnlyAdresses, updatePartyContactInfoOnlyAdresses)
router.post('/updatePartyContactInfoOnlyEmails',   valUpdatePartyContactInfoOnlyEmails,   updatePartyContactInfoOnlyEmails)
router.post('/updatePartyContactInfoOnlyPhones',   valUpdatePartyContactInfoOnlyPhones,   updatePartyContactInfoOnlyPhones)
router.post('/updatePersonContacInfo',             valUpdatePersonContactInfo,            updatePersonContacInfo)


module.exports = router