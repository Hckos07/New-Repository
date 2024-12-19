import React from 'react';
import terms from '/src/assets/images/terms.png';

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
            className="min-full h-auto object-cover rounded-lg shadow-2xl"
          />
        </div>

        {/* Text Section */}
        <div className="max-w-xl text-center md:text-left ml-24 mt-24">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4 md:mb-6">Terms and Conditions</h1>
          <p className="text-gray-700 text-base md:text-lg">
            Important – Please Read Carefully Before Downloading, Installing, or Using This Software.
            By downloading or installing this software from Software House, you confirm that you have read this license agreement, understand its terms, and agree to be bound by them. If you are entering into this agreement on behalf of a company or other legal entity, you represent and warrant that you have the authority to bind such entity and its affiliates to these terms and conditions. In such cases, the terms “you” or “your” shall refer to the entity and its affiliates.
            If you do not have the authority to bind your organization, or if you do not agree to these terms and conditions, you must not download, install, or use this software.
          </p>
        </div>
      </div>

      {/* Definitions Section */}
      <div className="mx-auto w-full pt-12">
        <h2 className="text-3xl font-bold text-blue-700 mb-6">General Limitations</h2>
        <ul className="text-gray-700 text-lg space-y-4 list-disc pl-6">
          <strong>Except as otherwise expressly provided under this License Agreement, You shall have no right, and You specifically agree not to:</strong>
          <li>Utilize the Software beyond the applicable term;</li>
          <li>Transfer, assign or sublicense Your license rights to any other person, and any such attempted transfer, assignment or sublicense shall be void;</li>
          <li>Provide, divulge, disclose, or make available to, or permit the use of the Software by any third party;</li>
          <li>Sell, resell, license, sublicense, distribute, rent or lease the Software or include the Software in a service bureau or outsourcing offering;</li>
          <li>Make error corrections to or otherwise modify or adapt the Software or create derivative works based upon the Software, or to permit third parties to do the same;</li>
          <li>Decompile, decrypt, reverse engineer, disassemble or otherwise reduce the Software to human-readable form, or to permit third parties to do the same;</li>
          <li>Circumvent or disable any features or technological protection measures in the Software;</li>
        </ul>
      </div>

      {/* Scope Section */}
      <div className="mx-auto w-full pt-12">
        <h2 className="text-3xl font-bold text-blue-700 mb-6">Warranty and Limitation of Liability</h2>
        <p className="text-gray-700 text-lg mb-4">
          The software is provided “as is” without warranty of any kind. All express, implied or statutory conditions, representations, and warranties including, without limitation, any implied warranty or condition of merchantability, fitness for a particular purpose, non-infringement, satisfactory quality or arising from a course of dealing, law, usage, or trade practice, are hereby excluded to the maximum extent allowed by applicable law. Neither Software House nor its licensors shall be liable for your action, or failure to act, in reliance on any information furnished as part of the software. You are solely responsible for maintaining the security of your network and computer systems. Neither Software House nor its licensors represent, warrant, or guarantee that (a) security threats, malicious code and/or vulnerabilities will be identified, or (b) the content will render your network and systems safe from malicious code, vulnerabilities, intrusions, or other security breaches, (c) every vulnerability on every tested system or application will be discovered, or (d) there will be no false positives.</p>
        <p className="text-gray-700 text-lg mb-4">
          In no event will Software House or its licensors be liable to you or your employees, or any third party, for any lost revenue, profit, or data, business interruption, or for special, indirect, consequential, incidental, or punitive damages, however caused and regardless of the theory of liability arising out of the use of or inability to use the software even if Software House have been advised of the possibility of such damages. In no event shall Software House be liable to you, whether in contract, warranty or tort (including negligence or strict liability), or otherwise, exceed the fee paid by you.
        </p>
      </div>

      {/* Prohibited Actions Section */}
      <div className="mx-auto w-full pt-12">
        <h2 className="text-3xl font-bold text-blue-700 mb-6">Terms and Termination</h2>
        <p className="text-gray-700 text-lg mb-4">
          This License Agreement is effective until terminated or the end of the applicable term. You may terminate this License Agreement at any time (i) by destroying all copies of Software, related documentation, analysis data and report and purging same from memory devices (required at the end of the applicable term). Your rights under this License Agreement will terminate immediately without notice from Software House if You fail to comply with any provision of this Agreement. Upon any termination, You must destroy all copies of Software and related documentation and purge same from memory devices. All provisions of this License Agreement relating to disclaimers of warranties, limitation of liabilities, remedies, damages protection of information and shall survive termination.
        </p>
      </div>
        <div className="mx-auto w-full pt-12">
          <h2 className="text-3xl font-bold text-blue-700 mb-6">General</h2>
          <p className="text-gray-700 text-lg mb-4">
          This License Agreement shall be governed by and construed in accordance with the laws of INDIA.
          </p>
        <h1><u>Cancellation & Refund Policy</u></h1>
        <p className="text-gray-700 text-lg ">
          Products/Services once ordered cannot be cancelled except when the purchase/subscription made, does not meet customer needs and specifications. You shall then initiate the return process. However, Software House may at its sole discretion consider accepting return of a product/service and grant of part or full refund, depending on the circumstances of each case.
        </p>
      </div>
    </section>
  );
};

export default TermsAndConditions;