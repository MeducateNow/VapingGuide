import TemplateCard from '../components/TemplateCard';

function Templates() {
  const templates = [
    {
      title: "Patient Information Leaflet",
      description: "A comprehensive guide for patients on using nicotine vaping products safely and effectively.",
      filename: "patient_information_leaflet.pdf",
      content: (
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-center">NICOTINE VAPING PRODUCTS</h2>
          <h3 className="text-lg font-bold text-center">Patient Information Leaflet</h3>
          
          <div className="mt-6">
            <h4 className="font-bold">What are nicotine vaping products?</h4>
            <p>
              Nicotine vaping products (also known as e-cigarettes or vapes) are devices that heat a liquid containing nicotine to create a vapor that is inhaled. They are being used as a tool to help some people quit smoking.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold">Important information</h4>
            <ul className="list-disc list-inside space-y-1">
              <li>Nicotine vaping products are only legally available with a prescription in Australia</li>
              <li>They are not completely risk-free but are considered less harmful than continuing to smoke</li>
              <li>The goal is to eventually stop using both cigarettes and vaping products</li>
              <li>Keep all nicotine products out of reach of children and pets</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold">How to use your nicotine vaping product</h4>
            <ol className="list-decimal list-inside space-y-1">
              <li>Follow the manufacturer's instructions for your specific device</li>
              <li>Start with short, gentle puffs rather than long, deep inhalations</li>
              <li>Use your vaping product when you would normally smoke a cigarette</li>
              <li>Aim to reduce your nicotine concentration over time according to your treatment plan</li>
            </ol>
          </div>
          
          <div>
            <h4 className="font-bold">Possible side effects</h4>
            <p>
              Common side effects include:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Throat irritation</li>
              <li>Coughing</li>
              <li>Dry mouth</li>
              <li>Headache</li>
              <li>Nausea</li>
            </ul>
            <p className="mt-2">
              These effects are usually mild and temporary. If you experience severe or persistent side effects, contact your healthcare provider.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold">Safety precautions</h4>
            <ul className="list-disc list-inside space-y-1">
              <li>Use the correct charger for your device</li>
              <li>Do not leave batteries charging unattended or overnight</li>
              <li>Store e-liquids in their original child-resistant containers</li>
              <li>Clean your device regularly according to the manufacturer's instructions</li>
              <li>Dispose of used products appropriately</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold">Weaning schedule</h4>
            <p>
              Your healthcare provider will work with you to develop a plan to gradually reduce your nicotine concentration over time. A typical schedule might look like:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Weeks 1-4: Starting concentration (as prescribed)</li>
              <li>Weeks 5-8: Reduce by 3-6mg/mL</li>
              <li>Weeks 9-12: Reduce by another 3-6mg/mL</li>
              <li>Weeks 13+: Continue reducing until you reach 0mg/mL</li>
            </ul>
            <p className="mt-2">
              This schedule may be adjusted based on your individual needs and progress.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold">Follow-up appointments</h4>
            <p>
              Regular follow-up appointments with your healthcare provider are important to:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Monitor your progress</li>
              <li>Adjust your treatment plan as needed</li>
              <li>Address any concerns or side effects</li>
              <li>Provide ongoing support for smoking cessation</li>
            </ul>
          </div>
          
          <div className="border-t pt-4">
            <p className="text-sm">
              <strong>Contact information:</strong> If you have any questions or concerns about your nicotine vaping product, please contact your healthcare provider.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Informed Consent Form",
      description: "A template for documenting patient consent for nicotine vaping product prescriptions.",
      filename: "informed_consent_form.pdf",
      content: (
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-center">INFORMED CONSENT FORM</h2>
          <h3 className="text-lg font-bold text-center">Nicotine Vaping Products for Smoking Cessation</h3>
          
          <div className="mt-6">
            <h4 className="font-bold">Patient Information</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              <div>
                <p className="text-sm text-gray-500">Full Name:</p>
                <div className="h-8 border-b border-gray-300"></div>
              </div>
              <div>
                <p className="text-sm text-gray-500">Date of Birth:</p>
                <div className="h-8 border-b border-gray-300"></div>
              </div>
              <div>
                <p className="text-sm text-gray-500">Address:</p>
                <div className="h-8 border-b border-gray-300"></div>
              </div>
              <div>
                <p className="text-sm text-gray-500">Contact Number:</p>
                <div className="h-8 border-b border-gray-300"></div>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold">Prescriber Information</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              <div>
                <p className="text-sm text-gray-500">Prescriber Name:</p>
                <div className="h-8 border-b border-gray-300"></div>
              </div>
              <div>
                <p className="text-sm text-gray-500">Registration Number:</p>
                <div className="h-8 border-b border-gray-300"></div>
              </div>
              <div>
                <p className="text-sm text-gray-500">Practice Name:</p>
                <div className="h-8 border-b border-gray-300"></div>
              </div>
              <div>
                <p className="text-sm text-gray-500">Contact Number:</p>
                <div className="h-8 border-b border-gray-300"></div>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold">Consent Statements</h4>
            <p className="mt-2">
              I, the patient named above, confirm that:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>I have been informed that nicotine vaping products are being prescribed to assist me in quitting smoking.</li>
              <li>I understand that these products are not approved by the TGA and are being prescribed through a special access pathway.</li>
              <li>I have been informed about the potential risks and benefits of using nicotine vaping products.</li>
              <li>I understand that the long-term effects of using these products are not fully known.</li>
              <li>I have been advised that the goal is to eventually stop using both cigarettes and vaping products.</li>
              <li>I have been provided with information on how to use these products safely.</li>
              <li>I understand the importance of keeping these products out of reach of children and pets.</li>
              <li>I have been informed about the weaning schedule to gradually reduce my nicotine intake.</li>
              <li>I agree to attend follow-up appointments to monitor my progress.</li>
              <li>I have had the opportunity to ask questions, and they have been answered to my satisfaction.</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold">Signatures</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <p className="text-sm text-gray-500">Patient Signature:</p>
                <div className="h-12 border-b border-gray-300 mt-6"></div>
                <p className="text-sm text-gray-500 mt-2">Date:</p>
                <div className="h-8 border-b border-gray-300"></div>
              </div>
              <div>
                <p className="text-sm text-gray-500">Prescriber Signature:</p>
                <div className="h-12 border-b border-gray-300 mt-6"></div>
                <p className="text-sm text-gray-500 mt-2">Date:</p>
                <div className="h-8 border-b border-gray-300"></div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Quick Reference Guide for Prescribing Pathways",
      description: "A concise summary of the different prescribing pathways for nicotine vaping products.",
      filename: "prescribing_pathways_guide.pdf",
      content: (
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-center">QUICK REFERENCE GUIDE</h2>
          <h3 className="text-lg font-bold text-center">Prescribing Pathways for Nicotine Vaping Products</h3>
          
          <div className="mt-6">
            <table className="min-w-full divide-y divide-gray-300 border border-gray-300">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-900 border-r border-gray-300">Pathway</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-900 border-r border-gray-300">Patient Group</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-900 border-r border-gray-300">TGA Approval</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Key Requirements</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-300">
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-300 font-medium">Authorised Prescriber (AP)</td>
                  <td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-300">Specific class of patients as defined in AP approval</td>
                  <td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-300">Pre-approval for prescriber (not per patient)</td>
                  <td className="px-4 py-3 text-sm text-gray-900">
                    <ul className="list-disc list-inside">
                      <li>Ethics committee endorsement</li>
                      <li>Six-monthly reports to TGA</li>
                      <li>Records of all prescriptions</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-300 font-medium">SAS Category B</td>
                  <td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-300">
                    <ul className="list-disc list-inside">
                      <li>Patients under 18 years</li>
                      <li>Any patient requiring individual approval</li>
                    </ul>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-300">Pre-approval required for each patient</td>
                  <td className="px-4 py-3 text-sm text-gray-900">
                    <ul className="list-disc list-inside">
                      <li>SAS B application form</li>
                      <li>Clinical justification</li>
                      <li>Wait for TGA approval before prescribing</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-300 font-medium">SAS Category C</td>
                  <td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-300">First-time prescriptions for patients 18+ years</td>
                  <td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-300">Notification to TGA within 28 days</td>
                  <td className="px-4 py-3 text-sm text-gray-900">
                    <ul className="list-disc list-inside">
                      <li>SAS C notification form</li>
                      <li>Can prescribe immediately</li>
                      <li>Submit notification within 28 days</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-300 font-medium">Standard Prescription</td>
                  <td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-300">Repeat prescriptions for patients 18+ years</td>
                  <td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-300">No TGA notification required</td>
                  <td className="px-4 py-3 text-sm text-gray-900">
                    <ul className="list-disc list-inside">
                      <li>Standard prescription</li>
                      <li>Document ongoing need</li>
                      <li>Regular follow-up</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div>
            <h4 className="font-bold">Prescription Requirements</h4>
            <p className="mt-2">
              All prescriptions for nicotine vaping products must include:
            </p>
            <ul className="list-disc list-inside space-y-1 mt-1">
              <li>Patient details (name, address, date of birth)</li>
              <li>Date of prescription</li>
              <li>Prescriber details (name, address, contact information, registration number)</li>
              <li>Product details (name, strength, form, quantity)</li>
              <li>Directions for use</li>
              <li>Number of repeats (if applicable)</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold">Useful Links</h4>
            <ul className="list-disc list-inside space-y-1 mt-1">
              <li>TGA Special Access Scheme: <span className="text-primary-600">www.tga.gov.au/special-access-scheme</span></li>
              <li>Authorised Prescriber Scheme: <span className="text-primary-600">www.tga.gov.au/authorised-prescriber-scheme</span></li>
              <li>Nicotine Vaping Products Information: <span className="text-primary-600">www.tga.gov.au/nicotine-vaping-products</span></li>
            </ul>
          </div>
          
          <div className="border-t pt-4">
            <p className="text-sm text-gray-500 italic">
              This quick reference guide is for informational purposes only and does not replace the need to consult the full TGA guidelines. Always refer to the latest TGA information when prescribing nicotine vaping products.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "TGA Guideline Summary",
      description: "A simplified summary of the TGA guidelines for prescribing nicotine vaping products.",
      filename: "tga_guideline_summary.pdf",
      content: (
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-center">TGA GUIDELINE SUMMARY</h2>
          <h3 className="text-lg font-bold text-center">Nicotine Vaping Products</h3>
          
          <div className="mt-6">
            <h4 className="font-bold">Regulatory Status</h4>
            <p>
              From October 1, 2021, consumers require a valid prescription to legally access nicotine vaping products in Australia. This includes importing from overseas websites.
            </p>
            <p className="mt-2">
              Key points:
            </p>
            <ul className="list-disc list-inside space-y-1 mt-1">
              <li>Nicotine is a scheduled poison (Schedule 4) when used for vaping</li>
              <li>It is illegal to supply nicotine vaping products to anyone without a valid prescription</li>
              <li>Prescriptions can only be issued by authorized healthcare practitioners (medical practitioners and nurse practitioners)</li>
              <li>Pharmacists can only dispense nicotine vaping products with a valid prescription</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold">Clinical Use</h4>
            <p>
              The TGA recognizes that nicotine vaping products may be a reasonable intervention for some patients who have been unable to stop smoking using other methods. However, they should generally be considered as a second-line therapy after first-line approaches have been unsuccessful.
            </p>
            <p className="mt-2">
              First-line approaches include:
            </p>
            <ul className="list-disc list-inside space-y-1 mt-1">
              <li>Nicotine replacement therapy (patches, gum, lozenges, inhalers)</li>
              <li>Varenicline</li>
              <li>Bupropion</li>
              <li>Behavioral support</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold">Prescribing Pathways</h4>
            <p>
              There are three main pathways for prescribing nicotine vaping products:
            </p>
            <ol className="list-decimal list-inside space-y-2 mt-2">
              <li>
                <strong>Authorised Prescriber (AP) Scheme</strong>
                <p className="ml-6 mt-1">
                  Allows approved healthcare practitioners to prescribe unapproved therapeutic goods to a class of patients under their care without further TGA approval.
                </p>
              </li>
              <li>
                <strong>Special Access Scheme (SAS) Category B</strong>
                <p className="ml-6 mt-1">
                  Requires TGA approval for each individual patient before prescribing. This is required for patients under 18 years of age.
                </p>
              </li>
              <li>
                <strong>Special Access Scheme (SAS) Category C</strong>
                <p className="ml-6 mt-1">
                  Allows healthcare practitioners to prescribe specified unapproved therapeutic goods to patients without prior TGA approval, with notification to the TGA required within 28 days.
                </p>
              </li>
            </ol>
          </div>
          
          <div>
            <h4 className="font-bold">Patient Assessment</h4>
            <p>
              The TGA recommends that healthcare practitioners:
            </p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Document the patient's smoking history and previous quit attempts</li>
              <li>Assess the patient's nicotine dependence</li>
              <li>Consider first-line smoking cessation therapies</li>
              <li>Discuss the risks and benefits of nicotine vaping products</li>
              <li>Obtain informed consent</li>
              <li>Develop a treatment plan including monitoring and weaning</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold">Special Considerations for Patients Under 18</h4>
            <p>
              The TGA has specific requirements for prescribing nicotine vaping products to patients under 18 years of age:
            </p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>SAS Category B approval is required for each individual patient</li>
              <li>Strong clinical justification must be provided</li>
              <li>The potential risks of nicotine use in developing brains should be considered</li>
              <li>Close monitoring and follow-up is essential</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold">Reporting Adverse Events</h4>
            <p>
              Healthcare practitioners should report any adverse events associated with nicotine vaping products to the TGA:
            </p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Online: <span className="text-primary-600">www.tga.gov.au/reporting-problems</span></li>
              <li>Email: <span className="text-primary-600">adr.reports@tga.gov.au</span></li>
              <li>Phone: 1800 044 114</li>
            </ul>
          </div>
          
          <div className="border-t pt-4">
            <p className="text-sm text-gray-500 italic">
              This summary is based on TGA guidelines as of 2023. Always refer to the latest TGA information at <span className="text-primary-600">www.tga.gov.au</span> when prescribing nicotine vaping products.
            </p>
          </div>
        </div>
      ),
    },
  ];
  
  return (
    <div className="py-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Downloadable Templates</h1>
        <p className="mt-2 text-gray-600">
          Access and download ready-to-use templates for patient information, consent forms, and quick reference guides.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {templates.map((template, index) => (
          <TemplateCard
            key={index}
            title={template.title}
            description={template.description}
            content={template.content}
            filename={template.filename}
          />
        ))}
      </div>
      
      <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-md">
        <h3 className="text-sm font-medium text-blue-800">Template Usage Note</h3>
        <p className="mt-1 text-sm text-blue-700">
          These templates are provided as a starting point and may need to be adapted to suit your specific practice requirements and patient needs. Always ensure that any documentation you use complies with relevant professional standards and regulations.
        </p>
      </div>
    </div>
  );
}

export default Templates;
