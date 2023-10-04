/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { KTIcon } from '../../../helpers'
import { Dropdown1 } from '../../content/dropdown/Dropdown1'

type Props = {
    className: string,
    acceptance: number,
    correction: number,
    update: number
}

const ListsWidget6: React.FC<Props> = ({ className, acceptance, correction, update }) => {
    return (
        <div className='card mb-5 mb-xl-8'>
            {/* begin::Header */}
            <div className='card-header border-0'>
                <h3 className='card-title fw-bold text-dark'>Statics</h3>
                <div className='card-toolbar'>
                    {/* begin::Menu */}
                    <button
                        type='button'
                        className='btn btn-sm btn-icon btn-color-primary btn-active-light-primary'
                        data-kt-menu-trigger='click'
                        data-kt-menu-placement='bottom-end'
                        data-kt-menu-flip='top-end'
                    >
                        <KTIcon iconName='category' className='fs-2' />
                    </button>
                    <Dropdown1 />
                    {/* end::Menu */}
                </div>
            </div>
            {/* end::Header */}
            {/* begin::Body */}
            <div className='card-body pt-0'>

                {/* begin::Item */}
                <div className='d-flex align-items-center bg-light-success rounded p-5 mb-7'>
                    {/* begin::Icon */}
                    <span className=' text-success me-5'>
                        <KTIcon iconName='double-check' className='text-success fs-1 me-5' />
                    </span>
                    {/* end::Icon */}
                    {/* begin::Title */}
                    <div className='flex-grow-1 me-2'>
                        <a href='#' className='fw-bold text-gray-800 text-hover-primary fs-6'>
                            Approved dossiers
                        </a>
                        {/* <span className='text-muted fw-semibold d-block'>Due in 2 Days</span> */}
                    </div>
                    {/* end::Title */}
                    {/* begin::Lable */}
                    <span className='fw-bold text-success py-1'>{acceptance}</span>
                    {/* end::Lable */}
                </div>
                {/* end::Item */}
                {/* begin::Item */}
                <div className='d-flex align-items-center bg-light-warning rounded p-5 mb-7'>
                    {/* begin::Icon */}
                    <span className=' text-warning me-5'>
                        <KTIcon iconName='arrow-right-left' className='text-warning fs-1 me-5' />
                    </span>
                    {/* end::Icon */}
                    {/* begin::Title */}
                    <div className='flex-grow-1 me-2'>
                        <a href='#' className='fw-bold text-gray-800 text-hover-primary fs-6'>
                            Request for change
                        </a>
                        {/* <span className='text-muted fw-semibold d-block'>Due in 2 Days</span> */}
                    </div>
                    {/* end::Title */}
                    {/* begin::Lable */}
                    <span className='fw-bold text-warning py-1'>{update}</span>
                    {/* end::Lable */}
                </div>
                {/* end::Item */}
                {/* begin::Item */}
                <div className='d-flex align-items-center bg-light-danger rounded p-5 mb-7'>
                    {/* begin::Icon */}
                    <span className=' text-danger me-5'>
                        <KTIcon iconName='cross' className='text-danger fs-1 me-5' />
                    </span>
                    {/* end::Icon */}
                    {/* begin::Title */}
                    <div className='flex-grow-1 me-2'>
                        <a href='#' className='fw-bold text-gray-800 text-hover-primary fs-6'>
                            Request for correction
                        </a>
                        {/* <span className='text-muted fw-semibold d-block'>Due in 5 Days</span> */}
                    </div>
                    {/* end::Title */}
                    {/* begin::Lable */}
                    <span className='fw-bold text-danger py-1'>{correction}</span>
                    {/* end::Lable */}
                </div>
                {/* end::Item */}
                {/* begin::Item */}

                {/* end::Item */}
            </div>
            {/* end::Body */}
        </div>
    )
}

export { ListsWidget6 }
