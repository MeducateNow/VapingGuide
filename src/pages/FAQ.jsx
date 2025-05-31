import FaqItem from '../components/FaqItem';

function FAQ() {
  const faqs = [
    {
      question: "What are the legal requirements for prescribing nicotine vaping products in Australia?",
      answer: (
        <>
          <p>Since October 1, 2021, nicotine vaping products are only legally available with a valid prescription in Australia. The key legal requirements include:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Only medical practitioners and nurse practitioners can prescribe nicotine vaping products</li>
            <li>Prescriptions must comply with state/territory requirements and include specific product details</li>
            <li>Prescribers must use one of the approved pathways: Authorised Prescriber scheme, SAS Category B, or SAS Category C</li>
            <li>For patients under 18, SAS Category B approval from the TGA is required before prescribing</li>
            <li>Pharmacists can only dispense nicotine vaping products with a valid prescription</li>
          </ul>
        </>
      ),
    },
    {
      question: "How do I become an Authorised Prescriber for nicotine vaping products?",
      answer: (
        <>
          <p>To become an Authorised Prescriber (AP) for nicotine vaping products, you need to:</p>
          <ol className="list-decimal pl-5 mt-2 space-y-1">
            <li>Obtain endorsement from a human research ethics committee (HREC) or specialist college</li>
            <li>Define the specific class of patients for whom you will prescribe (e.g., adult smokers who have tried and failed to quit with other methods)</li>
            <li>Submit an AP application to the TGA with the endorsement and supporting documentation</li>
            <li>Wait for TGA approval before prescribing under the AP scheme</li>
          </ol>
          <p className="mt-2">Once approved, you will need to:</p>
          <ul className="list-disc pl-5 mt-1 space-y-1">
            <li>Maintain records of all prescriptions issued under your AP approval</li>
            <li>Submit six-monthly reports to the TGA on products supplied</li>
            <li>Comply with any conditions specified in your AP approval</li>
          </ul>
          <p className="mt-2">More information and application forms are available on the <a href="https://www.tga.gov.au/authorised-prescriber-scheme" className="text-primary-600 hover:underline" target="_blank" rel="noopener noreferrer">TGA website</a>.</p>
        </>
      ),
    },
    {
      question: "What is the difference between SAS Category B and SAS Category C pathways?",
      answer: (
        <>
          <p><strong>SAS Category B:</strong></p>
          <ul className="list-disc pl-5 mt-1 space-y-1">
            <li>Requires TGA approval before prescribing</li>
            <li>Must submit an application for each individual patient</li>
            <li>Required for all patients under 18 years of age</li>
            <li>Approval is based on clinical justification provided</li>
            <li>Must wait for TGA approval before issuing the prescription</li>
          </ul>
          
          <p className="mt-3"><strong>SAS Category C:</strong></p>
          <ul className="list-disc pl-5 mt-1 space-y-1">
            <li>No pre-approval required from the TGA</li>
            <li>Can prescribe immediately to eligible patients</li>
            <li>Must notify the TGA within 28 days of prescribing</li>
            <li>Only applicable for patients 18 years or older</li>
            <li>Only needed for first-time prescriptions (repeat prescriptions don't require notification)</li>
          </ul>
          
          <p className="mt-3">The main difference is that SAS B requires approval before prescribing, while SAS C allows immediate prescribing with subsequent notification.</p>
        </>
      ),
    },
    {
      question: "How do I handle a patient under 18 who wants to use nicotine vaping products?",
      answer: (
        <>
          <p>Prescribing nicotine vaping products to patients under 18 requires special consideration:</p>
          
          <ol className="list-decimal pl-5 mt-2 space-y-2">
            <li>
              <strong>Mandatory TGA approval:</strong> You must submit an SAS Category B application and receive approval before prescribing.
            </li>
            <li>
              <strong>Clinical assessment:</strong> Conduct a thorough assessment including:
              <ul className="list-disc pl-5 mt-1 space-y-1">
                <li>Smoking history and nicotine dependence</li>
                <li>Previous quit attempts and methods tried</li>
                <li>Mental health considerations</li>
                <li>Social context and support</li>
              </ul>
            </li>
            <li>
              <strong>Strong clinical justification:</strong> Document clear reasons why nicotine vaping products are necessary, including why first-line therapies are unsuitable or have failed.
            </li>
            <li>
              <strong>Informed consent:</strong> Obtain informed consent from both the patient and their parent/guardian, explaining the potential risks of nicotine use in developing brains.
            </li>
            <li>
              <strong>Close monitoring:</strong> Implement a structured monitoring plan with regular follow-up appointments.
            </li>
            <li>
              <strong>Clear exit strategy:</strong> Develop a plan for weaning and eventual cessation.
            </li>
          </ol>
          
          <p className="mt-3">Remember that prescribing to minors should be considered only in exceptional circumstances where the benefits clearly outweigh the risks.</p>
        </>
      ),
    },
    {
      question: "What should I do if a specific product I've prescribed is not available?",
      answer: (
        <>
          <p>If a specific nicotine vaping product you've prescribed is unavailable, you have several options:</p>
          
          <ol className="list-decimal pl-5 mt-2 space-y-2">
            <li>
              <strong>Generic prescribing:</strong> Consider writing prescriptions that specify only the essential elements (nicotine concentration, quantity) rather than a specific brand or product, allowing pharmacists to substitute an available equivalent.
            </li>
            <li>
              <strong>Pharmacist consultation:</strong> Encourage communication between the pharmacist and patient to select an appropriate alternative within the parameters of your prescription.
            </li>
            <li>
              <strong>Issue a new prescription:</strong> If necessary, issue a new prescription for an alternative product that is available.
            </li>
            <li>
              <strong>Temporary adjustment:</strong> If a different nicotine concentration is the only option available, provide guidance on how the patient should adjust their usage (e.g., less frequent use for higher concentrations).
            </li>
            <li>
              <strong>Consider other options:</strong> If suitable alternatives are not available, consider temporarily switching to another form of nicotine replacement therapy until the preferred product becomes available.
            </li>
          </ol>
          
          <p className="mt-3">Document any changes to the treatment plan in the patient's records and ensure they understand how to use any alternative product safely.</p>
        </>
      ),
    },
    {
      question: "How should I approach a patient who is not responding to nicotine vaping products?",
      answer: (
        <>
          <p>If a patient is not responding to nicotine vaping products as expected, consider the following approach:</p>
          
          <ol className="list-decimal pl-5 mt-2 space-y-2">
            <li>
              <strong>Reassess usage patterns:</strong> Determine if the patient is using the product correctly and frequently enough to manage cravings.
            </li>
            <li>
              <strong>Evaluate nicotine concentration:</strong> The prescribed concentration may be too low to adequately address the patient's nicotine dependence. Consider adjusting the strength.
            </li>
            <li>
              <strong>Assess device suitability:</strong> Some patients may find certain devices difficult to use or unsatisfying. Consider recommending a different type of device.
            </li>
            <li>
              <strong>Check for concurrent smoking:</strong> Determine if the patient is continuing to smoke while using the vaping product, which may indicate inadequate nicotine delivery or behavioral factors.
            </li>
            <li>
              <strong>Consider combination therapy:</strong> Adding another form of nicotine replacement therapy (e.g., patches) may help manage cravings more effectively.
            </li>
            <li>
              <strong>Address behavioral aspects:</strong> Provide or refer for additional behavioral support for smoking cessation.
            </li>
            <li>
              <strong>Explore alternative approaches:</strong> If vaping products are not effective, consider other smoking cessation medications such as varenicline or bupropion.
            </li>
            <li>
              <strong>Rule out complicating factors:</strong> Assess for conditions that might make smoking cessation more difficult, such as depression, anxiety, or alcohol use.
            </li>
          </ol>
          
          <p className="mt-3">Document your assessment and any changes to the treatment plan. Schedule more frequent follow-up appointments to monitor progress and make further adjustments as needed.</p>
        </>
      ),
    },
    {
      question: "What information should I include in a nicotine vaping product prescription?",
      answer: (
        <>
          <p>A prescription for nicotine vaping products should include:</p>
          
          <ol className="list-decimal pl-5 mt-2 space-y-1">
            <li>
              <strong>Patient details:</strong>
              <ul className="list-disc pl-5 mt-1 space-y-1">
                <li>Full name</li>
                <li>Address</li>
                <li>Date of birth</li>
              </ul>
            </li>
            <li>
              <strong>Prescriber details:</strong>
              <ul className="list-disc pl-5 mt-1 space-y-1">
                <li>Name</li>
                <li>Address</li>
                <li>Contact information</li>
                <li>Registration number</li>
                <li>Signature</li>
              </ul>
            </li>
            <li>
              <strong>Product details:</strong>
              <ul className="list-disc pl-5 mt-1 space-y-1">
                <li>Product name (specific or generic)</li>
                <li>Nicotine concentration (mg/mL)</li>
                <li>Form (e-liquid, prefilled pods, etc.)</li>
                <li>Quantity (mL or number of pods/cartridges)</li>
              </ul>
            </li>
            <li>
              <strong>Directions for use:</strong>
              <ul className="list-disc pl-5 mt-1 space-y-1">
                <li>How often to use</li>
                <li>Maximum daily usage</li>
                <li>Any specific instructions</li>
              </ul>
            </li>
            <li>
              <strong>Date of prescription</strong>
            </li>
            <li>
              <strong>Number of repeats (if applicable)</strong>
            </li>
            <li>
              <strong>PBS/RPBS status (typically "Private")</strong>
            </li>
          </ol>
          
          <p className="mt-3">Example prescription wording:</p>
          <p className="mt-1 pl-5 italic">
            "Nicotine e-liquid 12mg/mL, 100mL. Use as needed to manage cravings, not exceeding 4mL per day. Supply: 1 bottle. Repeats: 2."
          </p>
          
          <p className="mt-3">Remember that prescriptions for nicotine vaping products are valid for up to 12 months unless otherwise specified.</p>
        </>
      ),
    },
    {
      question: "How do I report adverse effects from nicotine vaping products?",
      answer: (
        <>
          <p>Reporting adverse effects from nicotine vaping products is important for monitoring their safety. You can report adverse effects to the TGA through several channels:</p>
          
          <ol className="list-decimal pl-5 mt-2 space-y-2">
            <li>
              <strong>Online reporting:</strong> Use the TGA's online reporting system at <a href="https://www.tga.gov.au/reporting-problems" className="text-primary-600 hover:underline" target="_blank" rel="noopener noreferrer">www.tga.gov.au/reporting-problems</a>
            </li>
            <li>
              <strong>Email:</strong> Send reports to <span className="text-primary-600">adr.reports@tga.gov.au</span>
            </li>
            <li>
              <strong>Phone:</strong> Call the TGA's Adverse Event Reporting Line on 1800 044 114
            </li>
            <li>
              <strong>Fax:</strong> Send reports to 02 6232 8392
            </li>
            <li>
              <strong>Mail:</strong> Send reports to the Office of Product Review, TGA, PO Box 100, Woden ACT 2606
            </li>
          </ol>
          
          <p className="mt-3">When reporting, include as much information as possible:</p>
          <ul className="list-disc pl-5 mt-1 space-y-1">
            <li>Patient details (age, gender, medical history)</li>
            <li>Product details (brand, nicotine concentration, batch number if available)</li>
            <li>Description of the adverse effect</li>
            <li>Timing of the adverse effect in relation to product use</li>
            <li>Any other relevant information</li>
          </ul>
          
          <p className="mt-3">Healthcare professionals have a professional responsibility to report suspected adverse effects, even if they're not certain that the product caused the effect.</p>
        </>
      ),
    },
    {
      question: "What should I advise patients about importing nicotine vaping products from overseas?",
      answer: (
        <>
          <p>When advising patients about importing nicotine vaping products from overseas, provide the following guidance:</p>
          
          <ol className="list-decimal pl-5 mt-2 space-y-2">
            <li>
              <strong>Prescription requirement:</strong> Patients must have a valid prescription from an Australian registered medical practitioner or nurse practitioner to legally import nicotine vaping products.
            </li>
            <li>
              <strong>Personal importation scheme:</strong> Patients can import up to 3 months' supply for their personal use under the TGA's Personal Importation Scheme.
            </li>
            <li>
              <strong>Customs requirements:</strong> Advise patients to:
              <ul className="list-disc pl-5 mt-1 space-y-1">
                <li>Keep a copy of their prescription with the imported products</li>
                <li>Be prepared to show their prescription if requested by Border Force officials</li>
                <li>Ensure the imported products match what is specified in their prescription</li>
              </ul>
            </li>
            <li>
              <strong>Quality concerns:</strong> Warn patients that products from overseas may:
              <ul className="list-disc pl-5 mt-1 space-y-1">
                <li>Not meet Australian quality and safety standards</li>
                <li>Contain inaccurate nicotine concentrations</li>
                <li>Contain potentially harmful ingredients</li>
              </ul>
            </li>
            <li>
              <strong>Local options:</strong> Inform patients that they can also have their prescription filled by:
              <ul className="list-disc pl-5 mt-1 space-y-1">
                <li>Australian pharmacies that stock nicotine vaping products</li>
                <li>Australian compounding pharmacies that can prepare nicotine e-liquids</li>
                <li>Australian-based online pharmacies with appropriate licenses</li>
              </ul>
            </li>
            <li>
              <strong>Documentation:</strong> Advise patients to keep records of their purchases and correspondence with overseas suppliers.
            </li>
          </ol>
          
          <p className="mt-3">Remind patients that it is illegal to import nicotine vaping products without a valid prescription, and penalties may apply.</p>
        </>
      ),
    },
    {
      question: "What are the key differences between prescribing for smoking cessation versus harm reduction?",
      answer: (
        <>
          <p>When prescribing nicotine vaping products, there are important distinctions between a smoking cessation approach and a harm reduction approach:</p>
          
          <div className="mt-3">
            <p className="font-medium">Smoking Cessation Approach:</p>
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li>Primary goal is complete abstinence from both smoking and vaping</li>
              <li>Vaping is viewed as a temporary intervention</li>
              <li>Treatment plan includes a clear weaning schedule with target end date</li>
              <li>Higher initial nicotine concentrations may be used, with planned step-down</li>
              <li>Regular follow-up focuses on progress toward complete cessation</li>
              <li>Success is measured by achieving abstinence from all nicotine products</li>
              <li>May be combined with other cessation methods and behavioral support</li>
            </ul>
          </div>
          
          <div className="mt-3">
            <p className="font-medium">Harm Reduction Approach:</p>
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li>Primary goal is reducing harm by replacing smoking with a less harmful alternative</li>
              <li>Vaping may be viewed as a longer-term substitute for smoking</li>
              <li>Treatment plan focuses on maintaining smoking abstinence, with gradual nicotine reduction as tolerated</li>
              <li>Nicotine concentration is adjusted to effectively prevent return to smoking</li>
              <li>Regular follow-up focuses on preventing relapse to smoking</li>
              <li>Success is measured by sustained abstinence from smoking, even if vaping continues</li>
              <li>Acknowledges that for some patients, long-term vaping may be preferable to returning to smoking</li>
            </ul>
          </div>
          
          <p className="mt-3">Clinical documentation should clearly indicate which approach is being used and the rationale for the chosen approach based on the individual patient's circumstances, previous quit attempts, and preferences.</p>
          
          <p className="mt-3">In both approaches, the importance of complete smoking cessation should be emphasized, and patients should be informed that the ideal outcome is eventually becoming free from all nicotine products.</p>
        </>
      ),
    },
  ];
  
  return (
    <div className="py-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Frequently Asked Questions</h1>
        <p className="mt-2 text-gray-600">
          Find answers to common questions about prescribing nicotine vaping products in Australia.
        </p>
      </div>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="divide-y divide-gray-200 px-6">
          {faqs.map((faq, index) => (
            <FaqItem
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
      
      <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-md">
        <h3 className="text-sm font-medium text-blue-800">Have a question not answered here?</h3>
        <p className="mt-1 text-sm text-blue-700">
          For specific questions about prescribing nicotine vaping products, consult the TGA website or contact your professional association for guidance.
        </p>
      </div>
    </div>
  );
}

export default FAQ;
