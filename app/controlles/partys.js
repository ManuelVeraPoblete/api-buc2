const { httpError} = require('../helpers/handleError')


const dummy = (req, res) =>{
    try {
         console.log('partys-dummy')
         res.send({ data: 'ejecutado partys-dummy Partys Service' })
    } catch (e) {
        httpError(res, e)       
    }
}
const getEmployee = (req, res) =>{
    try {
         console.log('partys-getEmployee')
         res.send({ data: 'ejecutado partys-getEmployee Partys Service' })
    } catch (e) {
        httpError(res, e)   
    }
}

const getOrganization = (req, res) =>{
    try {
         console.log('partys-getorganization')
         res.send({ data: 'ejecutado partys-getOrganization Partys Service' })
    } catch (e) {
        httpError(res, e)       
    }
}

const getParty = (req, res) =>{
    try {
         console.log('partys-getparty')
         res.send({ data: 'ejecutado partys-getparty Partys Service' })
    } catch (e) {
        httpError(res, e)       
    }
}
const getPartyContactInfo = (req, res) =>{
    try {
         console.log('partys-getPartyContactInfo')
         res.send({ data: 'ejecutado partys-getPartyContactInfo Partys Service' })
    } catch (e) {
        httpError(res, e)       
    }
}

const getPartyCustomerSegment = (req, res) =>{
    try {
         console.log('partys-getPartyCustomerSegment')
         res.send({ data: 'ejecutado partys-getPartyContactInfo Partys Service' })
    } catch (e) {
        httpError(res, e)       
    }
}
const getPerson = (req, res) =>{
    try {
        console.log('partys-getPerson')
        res.send({ data: 'ejecutado partys-getperson Partys Service' })
    } catch (e) {
        httpError(res, e)       
    }
}
const searchCustomerRequirements = (req, res) =>{
    try {
        console.log('partys-searchCustomerRequirements')
        res.send({ data: 'ejecutado partys-searchCustomerRequirements Partys Service' })
    } catch (e) {
        httpError(res, e)       
    }
}
const updatePartyContactInfo = (req, res) =>{
    try {
        console.log('partys-updatePartyContactInfo')
        res.send({ data: 'ejecutado partys-updatePartyContactInfo Partys Service' })
    } catch (e) {
        httpError(res, e)       
    }
}

const updatePartyContactInfoOnlyAdresses = (req, res) =>{
    try {
        console.log('partys-updatePartyContactInfoOnlyAdresses')
        res.send({ data: 'ejecutado partys-updatePartyContactInfoOnlyAdresses Partys Service' })
    } catch (e) {
        httpError(res, e)       
    }
}

const updatePartyContactInfoOnlyEmails = (req, res) =>{
    try {
        console.log('partys-updatePartyContactInfoOnlyEmails')
        res.send({ data: 'ejecutado partys-updatePartyContactInfoOnlyEmails Partys Service' })
    } catch (e) {
        httpError(res, e)       
    }
}

const updatePartyContactInfoOnlyPhones = (req, res) =>{
    try {
        console.log('partys-updatePartyContactInfoOnlyPhones')
        res.send({ data: 'ejecutado partys-updatePartyContactInfoOnlyPhones Partys Service' })
    } catch (e) {
        httpError(res, e)       
    }
}

const updatePersonContacInfo = (req, res) =>{
    try {
        console.log('partys-updatePersonContacInfo')
        res.send({ data: 'ejecutado partys-updatePersonContacInfo Partys Service' })
    } catch (e) {
        httpError(res, e)       
    }
}


module.exports = {dummy, getEmployee, getOrganization, getParty, getPartyContactInfo, getPartyCustomerSegment,
                  getPerson, searchCustomerRequirements, updatePartyContactInfo, updatePartyContactInfoOnlyAdresses,
                  updatePartyContactInfoOnlyEmails, updatePartyContactInfoOnlyPhones, updatePersonContacInfo,}