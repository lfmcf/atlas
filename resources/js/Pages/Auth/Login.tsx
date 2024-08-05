/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from 'react'
import * as Yup from 'yup'
import clsx from 'clsx';
import { Link, useForm } from '@inertiajs/react'
import { useFormik } from 'formik'
import { getUserByToken, login } from './core/_requests'
import { toAbsoluteUrl } from '../../_metronic/helpers';
import { useAuth } from './core/Auth'

const loginSchema = Yup.object().shape({
    email: Yup.string()
        .email('Wrong email format')
        .min(3, 'Minimum 3 symbols')
        .max(50, 'Maximum 50 symbols')
        .required('Email is required'),
    password: Yup.string()
        .min(3, 'Minimum 3 symbols')
        .max(50, 'Maximum 50 symbols')
        .required('Password is required'),
})

const initialValues = {
    email: 'admin@demo.com',
    password: 'demo',
}

/*
  Formik+YUP+Typescript:
  https://jaredpalmer.com/formik/docs/tutorial#getfieldprops
  https://medium.com/@maurice.de.beijer/yup-validation-and-typescript-and-formik-6c342578a20e
*/

var styles = {
    body: {
        backgroundImage: `url(${toAbsoluteUrl('/media/auth/bg4.jpg')})`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    }
}

export default function Login() {
    const [loading, setLoading] = useState(false)
    const { saveAuth, setCurrentUser } = useAuth()

    const formik = useFormik({
        initialValues,
        validationSchema: loginSchema,
        onSubmit: async (values: { email: string; password: string; }, { setStatus, setSubmitting }: any) => {
            setLoading(true)
            try {
                const { data: auth } = await login(values.email, values.password)
                saveAuth(auth)
                const { data: user } = await getUserByToken(auth.api_token)
                setCurrentUser(user)
            } catch (error) {
                console.error(error)
                saveAuth(undefined)
                setStatus('The login details are incorrect')
                setSubmitting(false)
                setLoading(false)
            }
        },
    })

    const { data, setData, post, processing, errors, reset, clearErrors } = useForm({
        email: '',
        password: '',
        remember: '',
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
        clearErrors()
    };

    const submit = (e) => {
        e.preventDefault();
        post(route('login'));
    };

    useEffect(() => {

        for (var i in styles.body) {
            document.body.style[i] = styles.body[i];
        }
        return function cleanup() {
            for (var i in styles.body) {
                document.body.style[i] = null;
            }
        }
    }, [])


    return (


        <div className='d-flex flex-column flex-column-fluid flex-lg-row'>
            <div className="d-flex flex-center w-lg-50 pt-15 pt-lg-0 px-10">
                {/* <!--begin::Aside--> */}
                <div className="d-flex flex-center flex-lg-start flex-column">
                    {/* <!--begin::Logo--> */}
                    <a href="../../demo1/dist/index.html" className="mb-7">
                        <img alt="Logo" src={toAbsoluteUrl('/media/logos/customek-3.svg')} style={{ width: '226px' }} />
                    </a>
                    {/* <!--end::Logo--> */}
                    {/* <!--begin::Title--> */}
                    {/* <h2 className="text-white fw-normal m-0">Branding tools designed for your business</h2> */}
                    {/* <!--end::Title--> */}
                </div>
                {/* <!--begin::Aside--> */}
            </div>
            <div className="d-flex flex-column-fluid flex-lg-row-auto justify-content-center justify-content-lg-end p-12 p-lg-20">
                {/* <!--begin::Card--> */}
                <div className="bg-body d-flex flex-column align-items-stretch flex-center rounded-4 w-md-600px p-20">
                    {/* <!--begin::Wrapper--> */}
                    <div className="d-flex flex-center flex-column flex-column-fluid px-lg-10 pb-15 pb-lg-20">
                        {/* <!--begin::Form--> */}
                        <form className="form w-100 fv-plugins-bootstrap5 fv-plugins-framework" id="kt_sign_in_form" onSubmit={submit}>
                            {/* <!--begin::Heading--> */}
                            <div className="text-center mb-11">
                                {/* <!--begin::Title--> */}
                                <h1 className="text-dark fw-bolder mb-3">Sign In</h1>
                                {/* <!--end::Title--> */}
                                {/* <!--begin::Subtitle--> */}
                                {/* <div className="text-gray-500 fw-semibold fs-6">Your Social Campaigns</div> */}
                                {/* <!--end::Subtitle=--> */}
                            </div>
                            {/* <!--begin::Heading-->
								<!--begin::Login options--> */}
                            <div className="row g-3 mb-9">
                                {/* <!--begin::Col--> */}
                                <div className="col-md-6 mx-auto">
                                    {/* <!--begin::Google link=--> */}
                                    <a href="#" className="btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100">
                                        <img alt="Logo" src={toAbsoluteUrl('/media/svg/brand-logos/sso.png')} className="h-15px me-3" />Sign in with SSO</a>
                                    {/* <!--end::Google link=--> */}
                                </div>
                                {/* <!--end::Col-->
									<!--begin::Col--> */}
                                {/* <div className="col-md-6">
                                    
                                    <a href="#" className="btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100">
                                        <img alt="Logo" src="assets/media/svg/brand-logos/apple-black.svg" className="theme-light-show h-15px me-3" />
                                        <img alt="Logo" src="assets/media/svg/brand-logos/apple-black-dark.svg" className="theme-dark-show h-15px me-3" />Sign in with Apple</a>
                                    
                                </div> */}
                                {/* <!--end::Col--> */}
                            </div>
                            {/* <!--end::Login options-->
								<!--begin::Separator--> */}
                            <div className="separator separator-content my-14">
                                <span className="w-125px text-gray-500 fw-semibold fs-7">Or with email</span>
                            </div>
                            {/* <!--end::Separator-->
								<!--begin::Input group=--> */}
                            <div className="fv-row mb-8 fv-plugins-icon-container">
                                {/* <!--begin::Email--> */}
                                <input type="text" placeholder="Email" name="email" className={clsx('form-control bg-transparent', { 'is-invalid': errors.email })} onChange={onHandleChange} />
                                {/* <!--end::Email--> */}
                                <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback">{errors.email}</div>
                            </div>
                            {/* <!--end::Input group=--> */}
                            <div className="fv-row mb-3 fv-plugins-icon-container">
                                {/* <!--begin::Password--> */}
                                <input type="password" placeholder="Password" name="password" className={clsx('form-control bg-transparent', { 'is-invalid': errors.password })} onChange={onHandleChange} />
                                {/* <!--end::Password--> */}
                                <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback">{errors.password}</div>
                            </div>
                            {/* <!--end::Input group=-->
								<!--begin::Wrapper--> */}
                            <div className="d-flex flex-stack flex-wrap gap-3 fs-base fw-semibold mb-8">
                                <div></div>
                                {/* <!--begin::Link--> */}
                                <a href="../../demo1/dist/authentication/layouts/creative/reset-password.html" className="link-primary">Forgot Password ?</a>
                                {/* <!--end::Link--> */}
                            </div>
                            {/* <!--end::Wrapper-->
								<!--begin::Submit button--> */}
                            <div className="d-grid mb-10">
                                <button type="submit" id="kt_sign_in_submit" className="btn btn-primary">
                                    {/* <!--begin::Indicator label--> */}
                                    <span className="indicator-label">Sign In</span>
                                    {/* <!--end::Indicator label-->
										<!--begin::Indicator progress--> */}
                                    <span className="indicator-progress">Please wait...
                                        <span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                                    {/* <!--end::Indicator progress--> */}
                                </button>
                            </div>
                            {/* <!--end::Submit button-->*/}
                        </form>
                        {/* <!--end::Form--> */}
                    </div>
                    {/* <!--end::Wrapper-->
						<!--begin::Footer--> */}

                    {/* <!--end::Footer--> */}
                </div>
                {/* <!--end::Card--> */}
            </div>

        </div>

    )
}
