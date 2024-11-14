import React from 'react';
import terms from '/Users/hckos/Downloads/softwarehouse/src/assets/images/terms.png';

const TermsAndConditions = () => {
  return (
    <section className="bg-gray-50 p-8 md:p-12 lg:p-36 min-h-screen flex flex-col space-y-12">
      {/* Terms and Conditions Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start">
        {/* Image Section with Margin */}
        <div className="flex-shrink-0 w-full md:w-1/4 mb-6 md:mb-0 ml-0 md:ml-8 md:mr-12">
          <img
            src={terms}
            alt="Document Icon"
            className="w-full h-auto object-cover rounded-lg shadow-2xl"
          />
        </div>

        {/* Text Section */}
        <div className="max-w-xl text-center md:text-left ml-24 mt-24">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4 md:mb-6">Terms and Conditions</h1>
          <p className="text-gray-700 text-base md:text-lg">
            These Tally Solutions Software Terms of Use Agreement ("Terms of Use") are entered into by
            and between Tally Solutions Private Limited, a company registered under laws of India
            ("Tally") and You ("Customer"), for Products and Services, being sold by TALLY.
          </p>
        </div>
      </div>

      {/* Definitions Section */}
      <div className="mx-auto w-full pt-12">
        <h2 className="text-3xl font-bold text-blue-700 mb-6">Definitions</h2>
        <ul className="text-gray-700 text-lg space-y-4 list-disc pl-6">
          <li><strong>Company:</strong> Tally Solutions Private Limited, a company incorporated in the Republic of India.</li>
          <li><strong>Customer, User, You, Your:</strong> Shall mean any individual, entity, or organization, having entered into any commercial transaction with Tally and whose data is being collected.</li>
          <li><strong>Tally Partners or Suppliers:</strong> Shall mean businesses who are authorized to sell Tally Products and Services by Tally.</li>
          <li><strong>Personal Data, Data:</strong> Refers to all the personal non-anonymized data provided by the Customer.</li>
          <li><strong>Software:</strong> Each product available consists of an ACTIVATION KEY and one or more COMPONENTS (executables, documentation files, help files, language support dictionaries, data conversion and management utilities, edition management utilities, installers, scripts and/or other binaries/files).</li>
          <li><strong>Extension:</strong> Extending and/or enhancing and/or modifying the working of the software is called extension. Extensions are allowed exclusively through the use of APIs (Application Programming Interface) published by the company for the purpose of extending, enhancing, or modifying the interface and/or data handling capability and/or operational processes. The terms customization, extension, add-on, module, and other similar terms may be used to denote the extensions made to the interface and/or data handling capability of the software.</li>
          <li><strong>Documentation:</strong> It means user manuals, training materials, Product descriptions and specifications, technical manuals, license agreements, supporting materials and other information relating to Products or Services offered by TALLY, whether distributed in print, electronic, CD-ROM, or video format.</li>
          <li><strong>Price List:</strong> It means the price list(s) published at tallysolutions.com applicable to the relevant TALLY entity to which each Purchase Order is issued by Customer. Products on the Price List are categorized, and discounts provided by TALLY will vary by category.</li>
          <li><strong>Product:</strong> It means, individually or collectively as appropriate, Software and Documentation listed on the then-current Price List.</li>
        </ul>
      </div>
      <div className='mx-auto w-full p-12'>
        

      </div>
    </section>
  );
};

export default TermsAndConditions;