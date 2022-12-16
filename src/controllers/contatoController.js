const Contato = require('../models/ContatoModel')

exports.index = (req, res) => {
    res.render('contato', {
        contatoById: {}
    })
}

exports.register = async (req, res) => {
    const contato = new Contato(req.body)

    try {
        await contato.register()

        if (contato.errors.length > 0) {
            req.flash('errors', contato.errors)
            req.session.save(() => {
                return res.redirect('/contato/index')
            })
            return
        }

        req.flash('success', 'Contato registrado com sucesso!')
        return req.session.save(() => res.redirect(`/contato/index/${contato.contato._id}`))

    } catch (e) {
        console.log(e)
        return res.render('404')
    }
}

exports.editIndex = async (req, res) => {
    const contato = new Contato(req.body)
    if (!req.params.id) return res.render('404')

    const contatoById = await contato.buscaPorId(req.params.id)

    if (!contatoById) return res.render('404')

    res.render('contato', { contatoById })
}

exports.edit = async (req, res) => {

    try {
        if (!req.params.id) return res.render('404')
        const contato = new Contato(req.body)
        await contato.edit(req.params.id)

        if (contato.errors.length > 0) {
            req.flash('errors', contato.errors)
            req.session.save(() => {
                return res.redirect(`/contato/index/${req.params.id}`)
            })
            return
        }

        req.flash('success', 'Contato Atualizado com Sucesso!')
        return req.session.save(() => res.redirect(`/contato/index/${contato.contato._id}`))

    } catch (e) {
        console.log(e)
        res.render('404')
    }

}

exports.delete = async (req, res) => {
    if (!req.params.id) return res.render('404')
    const contato = await Contato.delete(req.params.id)
    if (!contato) return res.render('404')

    req.flash('success', 'O contato foi deletado!')

    return req.session.save(() => res.redirect('/'))

}