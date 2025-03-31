const getContacts = (req,res) => {
    res.status(200).json({message:"Get all contacts"});
}

const createContact = (req,res) => {
    res.status(200).json({message:"Create a new contact"});
}

const updateContact = (req,res) => {
    res.status(200).json({message:`Update contact with id ${req.params.id}`});
}

const getContact = (req,res) => {
    res.status(200).json({message:`Get contact with id ${req.params.id}`});
}

const deleteContact = (req,res) => {
    res.status(200).json({message:`Delete contact with id ${req.params.id}`});
}



module.exports = {
    getContacts,
    createContact,
    updateContact,
    getContact,
    deleteContact
}