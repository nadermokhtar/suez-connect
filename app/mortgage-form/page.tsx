"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import React from 'react';

// Define interfaces for each section of the form
interface PersonalInfo {
  fullName: string;
  ssn: string;
  dob: string;
  phone: string;
  email: string;
  address: string;
  maritalStatus: string;
  dependents: string;
}

interface EmploymentInfo {
  employerName: string;
  jobTitle: string;
  lengthOfEmployment: string;
  employerAddress: string;
  employerPhone: string;
  monthlyGrossIncome: string;
  previousEmployment: string;
}

interface IncomeAssets {
  monthlyGrossIncome: string;
  otherIncome: string;
  assetsAccounts: string;
  savingsForDownPayment: string;
}

interface CurrentHousing {
  rentOrOwn: string;
  monthlyPayment: string;
  currentPropertyValue: string;
  propertyType: string;
}

interface LoanInfo {
  loanType: string;
  loanAmount: string;
  downPayment: string;
  loanTerm: string;
  interestRateType: string;
  propertyLocation: string;
}

interface CreditHistory {
  creditScore: string;
  debtInfo: string;
  bankruptcies: string;
  collections: string;
}

interface PropertyDetails {
  propertyAddress: string;
  propertyType: string;
  estimatedValue: string;
  yearBuilt: string;
}

interface AdditionalQuestions {
  previousMortgage: string;
  foreclosureBankruptcy: string;
  firstTimeHomebuyer: string;
  coBorrowers: string;
}

// Define the structure of the entire form data
interface FormData {
  personalInfo: PersonalInfo;
  employmentInfo: EmploymentInfo;
  incomeAssets: IncomeAssets;
  currentHousing: CurrentHousing;
  loanInfo: LoanInfo;
  creditHistory: CreditHistory;
  propertyDetails: PropertyDetails;
  additionalQuestions: AdditionalQuestions;
}

const MortgageForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    personalInfo: {
      fullName: '',
      ssn: '',
      dob: '',
      phone: '',
      email: '',
      address: '',
      maritalStatus: '',
      dependents: '',
    },
    employmentInfo: {
      employerName: '',
      jobTitle: '',
      lengthOfEmployment: '',
      employerAddress: '',
      employerPhone: '',
      monthlyGrossIncome: '',
      previousEmployment: '',
    },
    incomeAssets: {
      monthlyGrossIncome: '',
      otherIncome: '',
      assetsAccounts: '',
      savingsForDownPayment: '',
    },
    currentHousing: {
      rentOrOwn: '',
      monthlyPayment: '',
      currentPropertyValue: '',
      propertyType: '',
    },
    loanInfo: {
      loanType: '',
      loanAmount: '',
      downPayment: '',
      loanTerm: '',
      interestRateType: '',
      propertyLocation: '',
    },
    creditHistory: {
      creditScore: '',
      debtInfo: '',
      bankruptcies: '',
      collections: '',
    },
    propertyDetails: {
      propertyAddress: '',
      propertyType: '',
      estimatedValue: '',
      yearBuilt: '',
    },
    additionalQuestions: {
      previousMortgage: '',
      foreclosureBankruptcy: '',
      firstTimeHomebuyer: '',
      coBorrowers: '',
    },
  });

  const router = useRouter();

  const handleChange = <T extends keyof FormData>(
    section: T,
    field: keyof FormData[T],
    value: string
  ) => {
    setFormData((prevData) => ({
      ...prevData,
      [section]: {
        ...prevData[section],
        [field]: value,
      },
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    const response = await fetch('https://hook.us2.make.com/66ssklccfognd6jacmsfxgqijyddhzde', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      router.push('/thank-you');
    } else {
      alert('There was an error submitting the form.');
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold mb-4">Personal Information</h2>
            <input type="text" placeholder="Full Name" className="input input-bordered w-full" value={formData.personalInfo.fullName} onChange={(e) => handleChange('personalInfo', 'fullName', e.target.value)} />
            <input type="text" placeholder="Social Security Number" className="input input-bordered w-full" value={formData.personalInfo.ssn} onChange={(e) => handleChange('personalInfo', 'ssn', e.target.value)} />
            <input type="date" placeholder="Date of Birth" className="input input-bordered w-full" value={formData.personalInfo.dob} onChange={(e) => handleChange('personalInfo', 'dob', e.target.value)} />
            <input type="text" placeholder="Phone Number" className="input input-bordered w-full" value={formData.personalInfo.phone} onChange={(e) => handleChange('personalInfo', 'phone', e.target.value)} />
            <input type="email" placeholder="Email Address" className="input input-bordered w-full" value={formData.personalInfo.email} onChange={(e) => handleChange('personalInfo', 'email', e.target.value)} />
            <input type="text" placeholder="Current Address" className="input input-bordered w-full" value={formData.personalInfo.address} onChange={(e) => handleChange('personalInfo', 'address', e.target.value)} />
            <select className="input input-bordered w-full" value={formData.personalInfo.maritalStatus} onChange={(e) => handleChange('personalInfo', 'maritalStatus', e.target.value)}>
              <option value="">Select Marital Status</option>
              <option value="Single">Single</option>
              <option value="Married">Married</option>
              <option value="Divorced">Divorced</option>
              <option value="Widowed">Widowed</option>
            </select>
            <input type="text" placeholder="Dependents" className="input input-bordered w-full" value={formData.personalInfo.dependents} onChange={(e) => handleChange('personalInfo', 'dependents', e.target.value)} />
            <div className="flex justify-end">
              <button type="button" className="btn btn-primary" onClick={() => setStep(step + 1)}>Next</button>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold mb-4">Employment Information</h2>
            <input type="text" placeholder="Current Employer Name" className="input input-bordered w-full" value={formData.employmentInfo.employerName} onChange={(e) => handleChange('employmentInfo', 'employerName', e.target.value)} />
            <input type="text" placeholder="Job Title" className="input input-bordered w-full" value={formData.employmentInfo.jobTitle} onChange={(e) => handleChange('employmentInfo', 'jobTitle', e.target.value)} />
            <select className="input input-bordered w-full" value={formData.employmentInfo.lengthOfEmployment} onChange={(e) => handleChange('employmentInfo', 'lengthOfEmployment', e.target.value)}>
              <option value="">Select Length of Employment</option>
              <option value="Less than 1 year">Less than 1 year</option>
              <option value="1-2 years">1-2 years</option>
              <option value="3-5 years">3-5 years</option>
              <option value="More than 5 years">More than 5 years</option>
            </select>
            <input type="text" placeholder="Employer's Address" className="input input-bordered w-full" value={formData.employmentInfo.employerAddress} onChange={(e) => handleChange('employmentInfo', 'employerAddress', e.target.value)} />
            <input type="text" placeholder="Employer's Phone Number" className="input input-bordered w-full" value={formData.employmentInfo.employerPhone} onChange={(e) => handleChange('employmentInfo', 'employerPhone', e.target.value)} />
            <input type="text" placeholder="Monthly Gross Income" className="input input-bordered w-full" value={formData.employmentInfo.monthlyGrossIncome} onChange={(e) => handleChange('employmentInfo', 'monthlyGrossIncome', e.target.value)} />
            <input type="text" placeholder="Previous Employment" className="input input-bordered w-full" value={formData.employmentInfo.previousEmployment} onChange={(e) => handleChange('employmentInfo', 'previousEmployment', e.target.value)} />
            <div className="flex justify-between">
              <button type="button" className="btn btn-secondary" onClick={() => setStep(step - 1)}>Back</button>
              <button type="button" className="btn btn-primary" onClick={() => setStep(step + 1)}>Next</button>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold mb-4">Income and Assets</h2>
            <input type="text" placeholder="Monthly Gross Income" className="input input-bordered w-full" value={formData.incomeAssets.monthlyGrossIncome} onChange={(e) => handleChange('incomeAssets', 'monthlyGrossIncome', e.target.value)} />
            <input type="text" placeholder="Other Income" className="input input-bordered w-full" value={formData.incomeAssets.otherIncome} onChange={(e) => handleChange('incomeAssets', 'otherIncome', e.target.value)} />
            <input type="text" placeholder="Assets and Accounts" className="input input-bordered w-full" value={formData.incomeAssets.assetsAccounts} onChange={(e) => handleChange('incomeAssets', 'assetsAccounts', e.target.value)} />
            <input type="text" placeholder="Savings for Down Payment" className="input input-bordered w-full" value={formData.incomeAssets.savingsForDownPayment} onChange={(e) => handleChange('incomeAssets', 'savingsForDownPayment', e.target.value)} />
            <div className="flex justify-between">
              <button type="button" className="btn btn-secondary" onClick={() => setStep(step - 1)}>Back</button>
              <button type="button" className="btn btn-primary" onClick={() => setStep(step + 1)}>Next</button>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold mb-4">Current Housing Information</h2>
            <input type="text" placeholder="Do you currently rent or own?" className="input input-bordered w-full" value={formData.currentHousing.rentOrOwn} onChange={(e) => handleChange('currentHousing', 'rentOrOwn', e.target.value)} />
            <input type="text" placeholder="Monthly Rent or Mortgage Payment" className="input input-bordered w-full" value={formData.currentHousing.monthlyPayment} onChange={(e) => handleChange('currentHousing', 'monthlyPayment', e.target.value)} />
            <input type="text" placeholder="Current Property Value" className="input input-bordered w-full" value={formData.currentHousing.currentPropertyValue} onChange={(e) => handleChange('currentHousing', 'currentPropertyValue', e.target.value)} />
            <select className="input input-bordered w-full" value={formData.currentHousing.propertyType} onChange={(e) => handleChange('currentHousing', 'propertyType', e.target.value)}>
              <option value="">Select Property Type</option>
              <option value="Single Family Home">Single Family Home</option>
              <option value="Condo">Condo</option>
              <option value="Townhouse">Townhouse</option>
              <option value="Multi-Family Home">Multi-Family Home</option>
              <option value="Other">Other</option>
            </select>
            <div className="flex justify-between">
              <button type="button" className="btn btn-secondary" onClick={() => setStep(step - 1)}>Back</button>
              <button type="button" className="btn btn-primary" onClick={() => setStep(step + 1)}>Next</button>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold mb-4">Loan Information</h2>
            <input type="text" placeholder="Type of Loan" className="input input-bordered w-full" value={formData.loanInfo.loanType} onChange={(e) => handleChange('loanInfo', 'loanType', e.target.value)} />
            <input type="text" placeholder="Loan Amount Desired" className="input input-bordered w-full" value={formData.loanInfo.loanAmount} onChange={(e) => handleChange('loanInfo', 'loanAmount', e.target.value)} />
            <input type="text" placeholder="Down Payment Amount" className="input input-bordered w-full" value={formData.loanInfo.downPayment} onChange={(e) => handleChange('loanInfo', 'downPayment', e.target.value)} />
            <select className="input input-bordered w-full" value={formData.loanInfo.loanTerm} onChange={(e) => handleChange('loanInfo', 'loanTerm', e.target.value)}>
              <option value="">Select Loan Term</option>
              <option value="15 years">15 years</option>
              <option value="30 years">30 years</option>
              <option value="20 years">20 years</option>
            </select>
            <select className="input input-bordered w-full" value={formData.loanInfo.interestRateType} onChange={(e) => handleChange('loanInfo', 'interestRateType', e.target.value)}>
              <option value="">Select Interest Rate Type</option>
              <option value="Fixed">Fixed</option>
              <option value="Variable">Variable</option>
            </select>
            <input type="text" placeholder="Property Location" className="input input-bordered w-full" value={formData.loanInfo.propertyLocation} onChange={(e) => handleChange('loanInfo', 'propertyLocation', e.target.value)} />
            <div className="flex justify-between">
              <button type="button" className="btn btn-secondary" onClick={() => setStep(step - 1)}>Back</button>
              <button type="button" className="btn btn-primary" onClick={() => setStep(step + 1)}>Next</button>
            </div>
          </div>
        );
      case 6:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold mb-4">Credit History</h2>
            <input type="text" placeholder="Credit Score" className="input input-bordered w-full" value={formData.creditHistory.creditScore} onChange={(e) => handleChange('creditHistory', 'creditScore', e.target.value)} />
            <input type="text" placeholder="Debt Information" className="input input-bordered w-full" value={formData.creditHistory.debtInfo} onChange={(e) => handleChange('creditHistory', 'debtInfo', e.target.value)} />
            <select className="input input-bordered w-full" value={formData.creditHistory.bankruptcies} onChange={(e) => handleChange('creditHistory', 'bankruptcies', e.target.value)}>
              <option value="">Select Bankruptcy Status</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            <select className="input input-bordered w-full" value={formData.creditHistory.collections} onChange={(e) => handleChange('creditHistory', 'collections', e.target.value)}>
              <option value="">Select Collections Status</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            <div className="flex justify-between">
              <button type="button" className="btn btn-secondary" onClick={() => setStep(step - 1)}>Back</button>
              <button type="button" className="btn btn-primary" onClick={() => setStep(step + 1)}>Next</button>
            </div>
          </div>
        );
      case 7:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold mb-4">Property Details</h2>
            <input type="text" placeholder="Address of Property" className="input input-bordered w-full" value={formData.propertyDetails.propertyAddress} onChange={(e) => handleChange('propertyDetails', 'propertyAddress', e.target.value)} />
            <input type="text" placeholder="Type of Property" className="input input-bordered w-full" value={formData.propertyDetails.propertyType} onChange={(e) => handleChange('propertyDetails', 'propertyType', e.target.value)} />
            <input type="text" placeholder="Estimated Property Value" className="input input-bordered w-full" value={formData.propertyDetails.estimatedValue} onChange={(e) => handleChange('propertyDetails', 'estimatedValue', e.target.value)} />
            <input type="text" placeholder="Year Built" className="input input-bordered w-full" value={formData.propertyDetails.yearBuilt} onChange={(e) => handleChange('propertyDetails', 'yearBuilt', e.target.value)} />
            <div className="flex justify-between">
              <button type="button" className="btn btn-secondary" onClick={() => setStep(step - 1)}>Back</button>
              <button type="button" className="btn btn-primary" onClick={() => setStep(step + 1)}>Next</button>
            </div>
          </div>
        );
      case 8:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold mb-4">Additional Questions</h2>
            <input type="text" placeholder="Have you had a previous mortgage?" className="input input-bordered w-full" value={formData.additionalQuestions.previousMortgage} onChange={(e) => handleChange('additionalQuestions', 'previousMortgage', e.target.value)} />
            <select className="input input-bordered w-full" value={formData.additionalQuestions.foreclosureBankruptcy} onChange={(e) => handleChange('additionalQuestions', 'foreclosureBankruptcy', e.target.value)}>
              <option value="">Select Foreclosure/Bankruptcy Status</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            <select className="input input-bordered w-full" value={formData.additionalQuestions.firstTimeHomebuyer} onChange={(e) => handleChange('additionalQuestions', 'firstTimeHomebuyer', e.target.value)}>
              <option value="">Select First Time Homebuyer Status</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            <input type="text" placeholder="Are there any co-borrowers?" className="input input-bordered w-full" value={formData.additionalQuestions.coBorrowers} onChange={(e) => handleChange('additionalQuestions', 'coBorrowers', e.target.value)} />
            <div className="flex justify-between">
              <button type="button" className="btn btn-secondary" onClick={() => setStep(step - 1)}>Back</button>
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Mortgage Application</h1>
      <div className="max-w-2xl mx-auto bg-base-100 p-8 rounded-lg shadow-xl">
        <form onSubmit={handleSubmit}>
          {renderStep()}
        </form>
      </div>
    </div>
  );
};

export default MortgageForm;