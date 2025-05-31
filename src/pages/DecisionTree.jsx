import { useState, useCallback } from 'react';
import DecisionTreeNode from '../components/DecisionTreeNode';

function DecisionTree() {
  const [currentPath, setCurrentPath] = useState([]);
  
  // Define the decision tree structure
  const decisionTree = {
    question: "What is your role?",
    info: "Select your healthcare professional role to determine the appropriate prescribing pathway.",
    options: [
      {
        text: "General Practitioner (GP)",
        onClick: (path) => setCurrentPath(path),
      },
      {
        text: "Nurse Practitioner (NP)",
        onClick: (path) => setCurrentPath(path),
      },
      {
        text: "Pharmacist",
        onClick: (path) => setCurrentPath(path),
      },
    ],
  };
  
  // Define the next level of the tree for GPs
  const gpNode = {
    question: "Are you an Authorised Prescriber (AP) for nicotine vaping products?",
    info: "Authorised Prescribers have received approval from the TGA to prescribe nicotine vaping products to a specific class of patients without requiring individual SAS approvals.",
    options: [
      {
        text: "Yes, I am an Authorised Prescriber",
        onClick: (path) => setCurrentPath(path),
      },
      {
        text: "No, I am not an Authorised Prescriber",
        onClick: (path) => setCurrentPath(path),
      },
    ],
  };
  
  // Define the next level of the tree for Nurse Practitioners
  const npNode = {
    question: "Are you an Authorised Prescriber (AP) for nicotine vaping products?",
    info: "Authorised Prescribers have received approval from the TGA to prescribe nicotine vaping products to a specific class of patients without requiring individual SAS approvals.",
    options: [
      {
        text: "Yes, I am an Authorised Prescriber",
        onClick: (path) => setCurrentPath(path),
      },
      {
        text: "No, I am not an Authorised Prescriber",
        onClick: (path) => setCurrentPath(path),
      },
    ],
  };
  
  // Define the pharmacist node
  const pharmacistNode = {
    title: "Pharmacist Role in Nicotine Vaping Products",
    result: "Dispensing Role Only",
    description: "As a pharmacist, you cannot prescribe nicotine vaping products. Your role is to dispense these products based on valid prescriptions from authorized healthcare providers.",
    requirements: [
      "Verify that the prescription is valid and complete",
      "Ensure the prescription is from a registered medical practitioner or nurse practitioner",
      "Check that the prescription includes specific product details, strength, and quantity",
      "Provide appropriate counseling to patients on product use and safety",
    ],
    notes: [
      "You can only dispense nicotine vaping products with a valid prescription",
      "Prescriptions for nicotine vaping products are valid for 12 months unless otherwise specified",
      "You should maintain appropriate records of dispensing",
      "You can provide advice on product selection and use based on the prescription parameters",
    ],
  };
  
  // Define the AP pathway for GPs and NPs
  const apPathway = {
    title: "Authorised Prescriber Pathway",
    result: "You can prescribe nicotine vaping products directly to patients within your approved class of patients",
    description: "As an Authorised Prescriber, you have TGA approval to prescribe nicotine vaping products to a specific class of patients without requiring individual SAS approvals for each patient.",
    requirements: [
      "Maintain records of all prescriptions issued under your AP approval",
      "Submit six-monthly reports to the TGA on products supplied",
      "Ensure patients meet the criteria for your approved class of patients",
      "Obtain informed consent from patients",
    ],
    notes: [
      "Your AP approval is specific to a defined class of patients (e.g., adult smokers who have tried and failed to quit with other methods)",
      "You must follow any conditions specified in your AP approval",
      "You should regularly review patients' progress and adjust treatment as needed",
      "AP status does not override the need for appropriate clinical assessment and documentation",
    ],
  };
  
  // Define the non-AP pathway for GPs and NPs
  const nonApNode = {
    question: "What is the age of your patient?",
    info: "The patient's age determines the appropriate prescribing pathway for nicotine vaping products.",
    options: [
      {
        text: "Under 18 years",
        onClick: (path) => setCurrentPath(path),
      },
      {
        text: "18 years or older",
        onClick: (path) => setCurrentPath(path),
      },
    ],
  };
  
  // Define the under 18 pathway
  const under18Pathway = {
    title: "Prescribing for Patients Under 18 Years",
    result: "Special Access Scheme (SAS) Category B Pathway Required",
    description: "For patients under 18 years of age, you must submit an SAS Category B application to the TGA for approval before prescribing nicotine vaping products.",
    requirements: [
      "Complete and submit an SAS Category B application form to the TGA",
      "Provide clinical justification for use in a minor",
      "Document that other smoking cessation methods have been tried and failed",
      "Obtain informed consent from the patient and parent/guardian",
      "Wait for TGA approval before prescribing",
    ],
    notes: [
      "Prescribing nicotine vaping products to minors requires strong clinical justification",
      "The TGA reviews each application on a case-by-case basis",
      "You should consider the potential risks of nicotine use in developing brains",
      "Close monitoring and follow-up is essential for this patient group",
      "Each prescription requires a separate SAS B approval",
    ],
  };
  
  // Define the 18+ pathway
  const adult18PlusNode = {
    question: "Is this the first time you're prescribing nicotine vaping products to this patient?",
    info: "The prescribing pathway differs for initial prescriptions versus repeat prescriptions.",
    options: [
      {
        text: "Yes, this is the first prescription",
        onClick: (path) => setCurrentPath(path),
      },
      {
        text: "No, this is a repeat prescription",
        onClick: (path) => setCurrentPath(path),
      },
    ],
  };
  
  // Define the first-time adult prescription pathway
  const firstTimePrescriptionPathway = {
    title: "First-Time Prescription for Adult Patient",
    result: "SAS Category C Notification Pathway",
    description: "For first-time prescriptions to patients 18 years or older, you can use the SAS Category C notification pathway, which allows you to prescribe immediately and notify the TGA afterward.",
    requirements: [
      "Complete a thorough patient assessment including smoking history",
      "Document that other smoking cessation methods have been considered",
      "Obtain informed consent from the patient",
      "Submit an SAS Category C notification to the TGA within 28 days of prescribing",
    ],
    notes: [
      "No pre-approval from the TGA is required before prescribing",
      "The prescription should specify the exact product, nicotine strength, and quantity",
      "The prescription is valid for up to 12 months unless otherwise specified",
      "You should provide the patient with information about safe use and storage",
      "A treatment plan including monitoring and potential weaning should be documented",
    ],
  };
  
  // Define the repeat prescription pathway
  const repeatPrescriptionPathway = {
    title: "Repeat Prescription for Adult Patient",
    result: "Standard Prescription (No TGA Notification Required)",
    description: "For repeat prescriptions to patients 18 years or older who have previously been prescribed nicotine vaping products, you can issue a standard prescription without TGA notification.",
    requirements: [
      "Review the patient's progress and response to treatment",
      "Document the ongoing need for nicotine vaping products",
      "Update the treatment plan as needed",
      "Obtain continued informed consent",
    ],
    notes: [
      "No TGA notification is required for repeat prescriptions",
      "The prescription should specify the exact product, nicotine strength, and quantity",
      "Consider whether dose reduction is appropriate as part of a weaning strategy",
      "Regular follow-up is recommended to assess progress toward smoking cessation",
      "The prescription is valid for up to 12 months unless otherwise specified",
    ],
  };
  
  // Function to navigate the decision tree based on the current path
  const getCurrentNode = useCallback(() => {
    if (currentPath.length === 0) {
      return decisionTree;
    }
    
    const firstChoice = currentPath[0];
    
    // GP path
    if (firstChoice === 0) {
      if (currentPath.length === 1) {
        return gpNode;
      }
      
      const secondChoice = currentPath[1];
      
      // GP - AP
      if (secondChoice === 0) {
        return apPathway;
      }
      
      // GP - Non-AP
      if (secondChoice === 1) {
        if (currentPath.length === 2) {
          return nonApNode;
        }
        
        const thirdChoice = currentPath[2];
        
        // GP - Non-AP - Under 18
        if (thirdChoice === 0) {
          return under18Pathway;
        }
        
        // GP - Non-AP - 18+
        if (thirdChoice === 1) {
          if (currentPath.length === 3) {
            return adult18PlusNode;
          }
          
          const fourthChoice = currentPath[3];
          
          // GP - Non-AP - 18+ - First time
          if (fourthChoice === 0) {
            return firstTimePrescriptionPathway;
          }
          
          // GP - Non-AP - 18+ - Repeat
          if (fourthChoice === 1) {
            return repeatPrescriptionPathway;
          }
        }
      }
    }
    
    // NP path
    if (firstChoice === 1) {
      if (currentPath.length === 1) {
        return npNode;
      }
      
      const secondChoice = currentPath[1];
      
      // NP - AP
      if (secondChoice === 0) {
        return apPathway;
      }
      
      // NP - Non-AP
      if (secondChoice === 1) {
        if (currentPath.length === 2) {
          return nonApNode;
        }
        
        const thirdChoice = currentPath[2];
        
        // NP - Non-AP - Under 18
        if (thirdChoice === 0) {
          return under18Pathway;
        }
        
        // NP - Non-AP - 18+
        if (thirdChoice === 1) {
          if (currentPath.length === 3) {
            return adult18PlusNode;
          }
          
          const fourthChoice = currentPath[3];
          
          // NP - Non-AP - 18+ - First time
          if (fourthChoice === 0) {
            return firstTimePrescriptionPathway;
          }
          
          // NP - Non-AP - 18+ - Repeat
          if (fourthChoice === 1) {
            return repeatPrescriptionPathway;
          }
        }
      }
    }
    
    // Pharmacist path
    if (firstChoice === 2) {
      return pharmacistNode;
    }
    
    return null;
  }, [currentPath]);
  
  const handleBack = () => {
    if (currentPath.length > 0) {
      setCurrentPath(currentPath.slice(0, -1));
    }
  };
  
  return (
    <div className="py-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Interactive Prescribing Pathway Decision Tree</h1>
          <p className="mt-2 text-gray-600">
            Navigate through this decision tree to determine the appropriate prescribing pathway for nicotine vaping products based on your role and patient characteristics.
          </p>
        </div>
        
        <DecisionTreeNode
          node={getCurrentNode()}
          onBack={currentPath.length > 0 ? handleBack : null}
          path={currentPath}
        />
        
        <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-md">
          <h3 className="text-sm font-medium text-blue-800">Important Note</h3>
          <p className="mt-1 text-sm text-blue-700">
            This decision tree is a guide only and does not replace clinical judgment or the need to stay updated with current TGA regulations. Always refer to the latest TGA guidelines when prescribing nicotine vaping products.
          </p>
        </div>
      </div>
    </div>
  );
}

export default DecisionTree;
