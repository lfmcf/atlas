/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react'
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

    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: '',
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();
        post(route('login'));
    };

    return (
        <div className='d-flex flex-column flex-lg-row flex-column-fluid h-100'>
            {/* begin::Body */}
            <div className='d-flex flex-column flex-lg-row-fluid w-lg-50 p-10 order-2 order-lg-1'>
                {/* begin::Form */}
                <div className='d-flex flex-center flex-column flex-lg-row-fluid'>
                    {/* begin::Wrapper */}
                    <div className='w-lg-500px p-10'>
                        <form
                            className='form w-100'
                            onSubmit={submit}
                            noValidate
                            id='kt_login_signin_form'
                        >
                            {/* begin::Heading */}
                            <div className='text-center mb-11'>
                                <h1 className='text-dark fw-bolder mb-3'>Sign In</h1>
                                <div className='text-gray-500 fw-semibold fs-6'>Your Social Campaigns</div>
                            </div>
                            {/* begin::Heading */}

                            {/* begin::Login options */}
                            <div className='row g-3 mb-9'>
                                {/* begin::Col */}
                                <div className='col-md-6'>
                                    {/* begin::Google link */}
                                    <a
                                        href='#'
                                        className='btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100'
                                    >
                                        <img
                                            alt='Logo'
                                            src={toAbsoluteUrl('/media/svg/brand-logos/google-icon.svg')}
                                            className='h-15px me-3'
                                        />
                                        Sign in with Google
                                    </a>
                                    {/* end::Google link */}
                                </div>
                                {/* end::Col */}

                                {/* begin::Col */}
                                <div className='col-md-6'>
                                    {/* begin::Google link */}
                                    <a
                                        href='#'
                                        className='btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100'
                                    >
                                        <img
                                            alt='Logo'
                                            src={toAbsoluteUrl('/media/svg/brand-logos/apple-black.svg')}
                                            className='theme-light-show h-15px me-3'
                                        />
                                        <img
                                            alt='Logo'
                                            src={toAbsoluteUrl('/media/svg/brand-logos/apple-black-dark.svg')}
                                            className='theme-dark-show h-15px me-3'
                                        />
                                        Sign in with Apple
                                    </a>
                                    {/* end::Google link */}
                                </div>
                                {/* end::Col */}
                            </div>
                            {/* end::Login options */}

                            {/* begin::Separator */}
                            <div className='separator separator-content my-14'>
                                <span className='w-125px text-gray-500 fw-semibold fs-7'>Or with email</span>
                            </div>
                            {/* end::Separator */}

                            {/* {formik.status ? (
                                <div className='mb-lg-15 alert alert-danger'>
                                    <div className='alert-text font-weight-bold'>{formik.status}</div>
                                </div>
                            ) : (
                                <div className='mb-10 bg-light-info p-8 rounded'>
                                    <div className='text-info'>
                                        Use account <strong>admin@demo.com</strong> and password <strong>demo</strong> to
                                        continue.
                                    </div>
                                </div>
                            )} */}

                            {/* begin::Form group */}
                            <div className='fv-row mb-8'>
                                <label className='form-label fs-6 fw-bolder text-dark'>Email</label>
                                <input
                                    placeholder='Email'
                                    // {...formik.getFieldProps('email')}
                                    className={clsx(
                                        'form-control bg-transparent',
                                        { 'is-invalid': errors.email },
                                        // {
                                        //     'is-valid': !formik.errors.email,
                                        // }
                                    )}
                                    type='email'
                                    name='email'
                                    autoComplete='off'
                                    onChange={onHandleChange}
                                />
                                {errors.email && (
                                    <div className='fv-plugins-message-container'>
                                        <span role='alert'>{errors.email}</span>
                                    </div>
                                )}
                            </div>
                            {/* end::Form group */}

                            {/* begin::Form group */}
                            <div className='fv-row mb-3'>
                                <label className='form-label fw-bolder text-dark fs-6 mb-0'>Password</label>
                                <input
                                    type='password'
                                    autoComplete='off'
                                    name='password'
                                    onChange={onHandleChange}
                                    // {...formik.getFieldProps('password')}
                                    className={clsx(
                                        'form-control bg-transparent',
                                        {
                                            'is-invalid': errors.password,
                                        },
                                        // {
                                        //     'is-valid': formik.touched.password && !formik.errors.password,
                                        // }
                                    )}
                                />
                                {errors.password && (
                                    <div className='fv-plugins-message-container'>
                                        <div className='fv-help-block'>
                                            <span role='alert'>{errors.password}</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                            {/* end::Form group */}

                            {/* begin::Wrapper */}
                            <div className='d-flex flex-stack flex-wrap gap-3 fs-base fw-semibold mb-8'>
                                <div />

                                {/* begin::Link */}
                                <Link href='/auth/forgot-password' className='link-primary'>
                                    Forgot Password ?
                                </Link>
                                {/* end::Link */}
                            </div>
                            {/* end::Wrapper */}

                            {/* begin::Action */}
                            <div className='d-grid mb-10'>
                                <button
                                    type='submit'
                                    id='kt_sign_in_submit'
                                    className='btn btn-primary'
                                    disabled={formik.isSubmitting || !formik.isValid}
                                >
                                    {!loading && <span className='indicator-label'>Continue</span>}
                                    {loading && (
                                        <span className='indicator-progress' style={{ display: 'block' }}>
                                            Please wait...
                                            <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                                        </span>
                                    )}
                                </button>
                            </div>
                            {/* end::Action */}

                            {/* <div className='text-gray-500 text-center fw-semibold fs-6'>
                                Not a Member yet?{' '}
                                <Link href='/auth/registration' className='link-primary'>
                                    Sign up
                                </Link>
                            </div> */}
                        </form>
                    </div>
                    {/* end::Wrapper */}
                </div>
                {/* end::Form */}

                {/* begin::Footer */}
                <div className='d-flex flex-center flex-wrap px-5'>
                    {/* begin::Links */}
                    <div className='d-flex fw-semibold text-primary fs-base'>
                        <a href='#' className='px-5' target='_blank'>
                            Terms
                        </a>

                        <a href='#' className='px-5' target='_blank'>
                            Plans
                        </a>

                        <a href='#' className='px-5' target='_blank'>
                            Contact Us
                        </a>
                    </div>
                    {/* end::Links */}
                </div>
                {/* end::Footer */}
            </div>
            {/* end::Body */}

            {/* begin::Aside */}
            <div
                className='d-flex flex-lg-row-fluid w-lg-50 bgi-size-cover bgi-position-center order-1 order-lg-2'
                style={{ backgroundImage: `url(${toAbsoluteUrl('/media/misc/auth-bg.png')})` }}
            >
                {/* begin::Content */}
                <div className='d-flex flex-column flex-center py-15 px-5 px-md-15 w-100'>
                    {/* begin::Logo */}
                    <Link href='/' className='mb-12'>
                        <img alt='Logo' src={toAbsoluteUrl('/media/logos/custom-1.png')} className='h-75px' />
                    </Link>
                    {/* end::Logo */}

                    {/* begin::Image */}
                    <img
                        className='mx-auto w-275px w-md-50 w-xl-500px mb-10 mb-lg-20'
                        src={toAbsoluteUrl('/media/misc/auth-screens.png')}
                        alt=''
                    />
                    {/* end::Image */}

                    {/* begin::Title */}
                    <h1 className='text-white fs-2qx fw-bolder text-center mb-7'>
                        Fast, Efficient and Productive
                    </h1>
                    {/* end::Title */}

                    {/* begin::Text */}
                    <div className='text-white fs-base text-center'>
                        In this kind of post,{' '}
                        <a href='#' className='opacity-75-hover text-warning fw-bold me-1'>
                            the blogger
                        </a>
                        introduces a person they’ve interviewed <br /> and provides some background information
                        about
                        <a href='#' className='opacity-75-hover text-warning fw-bold me-1'>
                            the interviewee
                        </a>
                        and their <br /> work following this is a transcript of the interview.
                    </div>
                    {/* end::Text */}
                </div>
                {/* end::Content */}
            </div>
            {/* end::Aside */}
        </div>

    )
}
