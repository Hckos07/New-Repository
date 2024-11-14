import React from 'react'

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-100 w-screen h-screen flex items-center justify-center">
      <div className="bg-white p-32 shadow-lg rounded-lg w-full h-full overflow-auto">
        {/* Delivery Policy */}
        <section className="mb-5 text-center">
          <h1 className="text-2xl font-bold mb-2">Delivery Policy</h1>
          <p className="text-gray-700">
            We ensure that all purchases made online will be delivered to you within 24 hours. Once the payment is cleared, an email is automatically sent to your email address with download instructions along with the invoice. We suggest you save the invoice you received in your mailbox.
          </p>
          <p className='p-5'>
            _______________
          </p>
        </section>

        {/* Cancellation Policy */}
        <section className="my-11 text-center">
          <h1 className="text-2xl font-bold mb-2">Cancellation Policy</h1>
          <p className="text-gray-700">
            Cancellation of orders may be considered only in case of purchases made by the customers by mistake. However, the Company may at its sole discretion consider the cancellation in other cases and may refund in part or full.
          </p>
          <p className='p-5'>
            _______________
          </p>
        </section>

        {/* Refund Policy */}
        <section className="my-11 text-center">
          <h1 className="text-2xl font-bold mb-2">Refund Policy</h1>
          <p className="text-gray-700">
            Products/Services once ordered cannot be cancelled. Goods/Services once sold shall not be accepted back by the Company. However, the Company may at its sole discretion consider accepting return of a product/service and grant of part or full refund in such circumstances.
          </p>
          <p className='p-5'>
            _______________
          </p>
        </section>

        {/* Privacy Policy */}
        <section className="mb-11 text-center">
          <h1 className="text-2xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-gray-700">
            Protecting your privacy is very important to us. As part of the normal operation of our services, your basic information (name, address, e-mail, and phone number) is collected by us for internal record purposes. We do use your contact information to send you products/services based on your orders and your interests, and we also use your name and address for raising bills and invoices.
          </p>
          <p className='p-5'>
            _______________
          </p>
        </section>
      </div>
    </div>
  )
}

export default PrivacyPolicy