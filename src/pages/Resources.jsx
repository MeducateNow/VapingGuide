import { useState } from 'react';
import ResourceCard from '../components/ResourceCard';
import { FiSearch, FiBook, FiClipboard, FiUsers, FiShoppingBag, FiShield, FiAlertTriangle } from 'react-icons/fi';

function Resources() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const resources = [
    {
      id: 'welcome',
      title: 'Welcome & Overview',
      icon: <FiBook />,
      content: (
        <div className="space-y-4">
          <p>
            Nicotine vaping products (NVPs) are regulated as prescription-only medicines in Australia. This guide provides healthcare professionals with information on the legal framework and prescribing pathways for these products.
          </p>
          <p>
            NVPs may be considered as a second-line therapy for smoking cessation when first-line approaches (such as nicotine replacement therapy, varenicline, or bupropion) have been unsuccessful or are contraindicated.
          </p>
          <p>
            This resource hub is designed to help you navigate the complex regulatory environment and make informed decisions when considering NVPs for your patients.
          </p>
        </div>
      ),
    },
    {
      id: 'context',
      title: 'Context & Regulations',
      icon: <FiClipboard />,
      content: (
        <div className="space-y-4">
          <h4 className="font-medium">Regulatory Framework</h4>
          <p>
            From October 1, 2021, consumers require a valid prescription to legally access nicotine vaping products in Australia. This includes importing from overseas websites.
          </p>
          
          <h4 className="font-medium mt-4">Key Regulatory Points</h4>
          <ul className="list-disc list-inside space-y-2">
            <li>Nicotine is a scheduled poison (Schedule 4) when used for vaping</li>
            <li>It is illegal to supply nicotine vaping products to anyone without a valid prescription</li>
            <li>Prescriptions can only be issued by authorized healthcare practitioners (medical practitioners and nurse practitioners)</li>
            <li>Pharmacists can only dispense nicotine vaping products with a valid prescription</li>
          </ul>
          
          <h4 className="font-medium mt-4">TGA's Role</h4>
          <p>
            The Therapeutic Goods Administration (TGA) regulates nicotine vaping products as therapeutic goods. The TGA provides pathways for healthcare practitioners to prescribe unapproved therapeutic goods, including nicotine vaping products.
          </p>
        </div>
      ),
    },
    {
      id: 'legal-framework',
      title: 'Legal Framework',
      icon: <FiShield />,
      content: (
        <div className="space-y-4">
          <h4 className="font-medium">Prescribing Pathways</h4>
          <p>
            There are three main pathways for prescribing nicotine vaping products in Australia:
          </p>
          
          <ol className="list-decimal list-inside space-y-2">
            <li>
              <strong>Authorised Prescriber (AP) Scheme</strong>: Allows approved healthcare practitioners to prescribe unapproved therapeutic goods to a class of patients under their care without further TGA approval.
            </li>
            <li>
              <strong>Special Access Scheme (SAS) Category B</strong>: Requires TGA approval for each individual patient before prescribing. This is required for patients under 18 years of age.
            </li>
            <li>
              <strong>Special Access Scheme (SAS) Category C</strong>: Allows healthcare practitioners to prescribe specified unapproved therapeutic goods to patients without prior TGA approval, with notification to the TGA required within 28 days.
            </li>
          </ol>
          
          <h4 className="font-medium mt-4">Prescription Requirements</h4>
          <p>
            All prescriptions for nicotine vaping products must include:
          </p>
          
          <ul className="list-disc list-inside space-y-2">
            <li>Patient details (name, address, date of birth)</li>
            <li>Date of prescription</li>
            <li>Prescriber details (name, address, contact information, registration number)</li>
            <li>Product details (name, strength, form, quantity)</li>
            <li>Directions for use</li>
            <li>Number of repeats (if applicable)</li>
          </ul>
        </div>
      ),
    },
    {
      id: 'prescribing-process',
      title: 'The Prescribing Process',
      icon: <FiUsers />,
      content: (
        <div className="space-y-4">
          <h4 className="font-medium">Patient Assessment</h4>
          <p>
            Before prescribing nicotine vaping products, healthcare practitioners should:
          </p>
          
          <ul className="list-disc list-inside space-y-2">
            <li>Document the patient's smoking history and previous quit attempts</li>
            <li>Assess the patient's nicotine dependence</li>
            <li>Consider first-line smoking cessation therapies</li>
            <li>Discuss the risks and benefits of nicotine vaping products</li>
            <li>Obtain informed consent</li>
          </ul>
          
          <h4 className="font-medium mt-4">Prescription Details</h4>
          <p>
            When prescribing nicotine vaping products, consider:
          </p>
          
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Nicotine strength</strong>: Generally, start with a concentration that matches the patient's current smoking habits (e.g., 18mg/mL for heavy smokers, 12mg/mL for moderate smokers, 6mg/mL for light smokers)
            </li>
            <li>
              <strong>Quantity</strong>: Prescribe an appropriate quantity based on the patient's needs and follow-up schedule
            </li>
            <li>
              <strong>Duration</strong>: Prescriptions are valid for up to 12 months unless otherwise specified
            </li>
          </ul>
          
          <h4 className="font-medium mt-4">Support & Monitoring</h4>
          <p>
            Ongoing support and monitoring are essential:
          </p>
          
          <ul className="list-disc list-inside space-y-2">
            <li>Provide behavioral support for smoking cessation</li>
            <li>Develop a weaning schedule to reduce nicotine concentration over time</li>
            <li>Schedule regular follow-up appointments to assess progress</li>
            <li>Monitor for adverse effects and dependence</li>
            <li>Adjust the treatment plan as needed</li>
          </ul>
          
          <h4 className="font-medium mt-4">Pharmacist Role</h4>
          <p>
            Pharmacists play a crucial role in:
          </p>
          
          <ul className="list-disc list-inside space-y-2">
            <li>Verifying the validity of prescriptions</li>
            <li>Dispensing appropriate products</li>
            <li>Providing advice on product use and safety</li>
            <li>Communicating with prescribers about any concerns</li>
            <li>Maintaining appropriate records</li>
          </ul>
        </div>
      ),
    },
    {
      id: 'practical-tips',
      title: 'Practical Tips & Challenges',
      icon: <FiShoppingBag />,
      content: (
        <div className="space-y-4">
          <h4 className="font-medium">Product Selection</h4>
          <p>
            When prescribing nicotine vaping products, you can either:
          </p>
          
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Specify an exact product</strong>: Include the brand name, device type, and specific e-liquid details
            </li>
            <li>
              <strong>Write a generic prescription</strong>: Specify only the nicotine concentration and quantity, allowing the pharmacist and patient to select an appropriate product
            </li>
          </ul>
          
          <p className="mt-2">
            Considerations for product selection:
          </p>
          
          <ul className="list-disc list-inside space-y-2">
            <li>Closed systems (pre-filled pods) are simpler to use but offer less flexibility</li>
            <li>Open systems (refillable tanks) offer more customization but require more knowledge to use</li>
            <li>Nicotine salts provide smoother delivery at higher concentrations</li>
            <li>Freebase nicotine provides stronger throat hit but can be harsh at higher concentrations</li>
          </ul>
          
          <h4 className="font-medium mt-4">Online Systems</h4>
          <p>
            The TGA's Special Access Scheme (SAS) online system can be used to:
          </p>
          
          <ul className="list-disc list-inside space-y-2">
            <li>Submit SAS Category B applications</li>
            <li>Submit SAS Category C notifications</li>
            <li>Track the status of applications</li>
            <li>Access previous applications and notifications</li>
          </ul>
          
          <p className="mt-2">
            The online system is available at <a href="https://www.tga.gov.au/special-access-scheme" className="text-primary-600 hover:underline" target="_blank" rel="noopener noreferrer">https://www.tga.gov.au/special-access-scheme</a>
          </p>
          
          <h4 className="font-medium mt-4">Common Questions</h4>
          <p>
            Frequently asked questions about prescribing:
          </p>
          
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Who can get a prescription?</strong> Any patient for whom the prescriber determines nicotine vaping products are clinically appropriate, typically those who have tried and failed to quit smoking using first-line therapies
            </li>
            <li>
              <strong>How long is a prescription valid?</strong> Up to 12 months unless otherwise specified
            </li>
            <li>
              <strong>Can I prescribe to patients under 18?</strong> Yes, but only with TGA approval via the SAS Category B pathway, and only in exceptional circumstances with strong clinical justification
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: 'harm-reduction',
      title: 'Harm Reduction & Safety',
      icon: <FiAlertTriangle />,
      content: (
        <div className="space-y-4">
          <h4 className="font-medium">Vaping vs. Smoking</h4>
          <p>
            While nicotine vaping products are not risk-free, they are generally considered to be less harmful than continued smoking. Key points to consider:
          </p>
          
          <ul className="list-disc list-inside space-y-2">
            <li>Vaping eliminates exposure to many of the harmful combustion products found in cigarette smoke</li>
            <li>The long-term health effects of vaping are still being studied</li>
            <li>The goal should be complete cessation of both smoking and vaping</li>
            <li>Dual use (smoking and vaping concurrently) should be discouraged</li>
          </ul>
          
          <h4 className="font-medium mt-4">Safety Considerations</h4>
          <p>
            Important safety information to discuss with patients:
          </p>
          
          <ul className="list-disc list-inside space-y-2">
            <li>Keep all nicotine products out of reach of children and pets</li>
            <li>Use the correct charger for the device to prevent battery issues</li>
            <li>Follow the manufacturer's instructions for device maintenance</li>
            <li>Report any adverse effects to the TGA</li>
            <li>Dispose of used products appropriately</li>
          </ul>
          
          <h4 className="font-medium mt-4">Monitoring for Misuse/Dependence</h4>
          <p>
            Signs that may indicate problematic use:
          </p>
          
          <ul className="list-disc list-inside space-y-2">
            <li>Escalating nicotine concentrations over time</li>
            <li>Resistance to reducing nicotine concentration</li>
            <li>Using the device more frequently than recommended</li>
            <li>Experiencing withdrawal symptoms when unable to vape</li>
            <li>Continued use despite adverse effects</li>
          </ul>
          
          <p className="mt-2">
            If these signs are present, consider:
          </p>
          
          <ul className="list-disc list-inside space-y-2">
            <li>Reviewing the treatment plan</li>
            <li>Implementing a more structured weaning schedule</li>
            <li>Providing additional behavioral support</li>
            <li>Considering alternative smoking cessation approaches</li>
          </ul>
        </div>
      ),
    },
  ];
  
  // Filter resources based on search term
  const filteredResources = resources.filter(resource => 
    resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    resource.content.props.children.some(child => 
      typeof child === 'object' && 
      child.props && 
      child.props.children && 
      (typeof child.props.children === 'string' ? 
        child.props.children.toLowerCase().includes(searchTerm.toLowerCase()) : 
        JSON.stringify(child.props.children).toLowerCase().includes(searchTerm.toLowerCase()))
    )
  );
  
  return (
    <div className="py-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Resource Hub</h1>
        <p className="mt-2 text-gray-600">
          Access comprehensive information on nicotine vaping products, prescribing processes, and regulatory requirements.
        </p>
      </div>
      
      <div className="mb-6 relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <FiSearch className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
          placeholder="Search resources..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      <div className="space-y-4">
        {filteredResources.length > 0 ? (
          filteredResources.map((resource) => (
            <ResourceCard
              key={resource.id}
              title={resource.title}
              icon={resource.icon}
            >
              {resource.content}
            </ResourceCard>
          ))
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-500">No resources found matching "{searchTerm}"</p>
            <button
              className="mt-2 text-primary-600 hover:text-primary-800"
              onClick={() => setSearchTerm('')}
            >
              Clear search
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Resources;
