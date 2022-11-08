import React from 'react';

const Fees = () => {
    return (
        <div className='max-w-screen-xl mx-auto my-20'>
            <h3 className='text-5xl font-bold text-blue-2 text-center uppercase mb-3'>Fees</h3>
            {/* Fee Item */}
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-sm">
                <div className="collapse-title text-xl font-medium">
                    Study Permit starts from $960
                </div>
                <div className="collapse-content">
                    <p>1st Installment $600: At Engagement</p>
                    <p>2nd Installment: At File Submission for Study Permit</p>
                </div>
            </div>
            {/* Fee Item */}
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-sm">
                <div className="collapse-title text-xl font-medium">
                    Business Migration starts from $2000
                </div>
                <div className="collapse-content">
                    <p>1st Installment $1000: At Engagement</p>
                    <p>2nd Installment: At File Submission for Business Migration</p>
                </div>
            </div>
            {/* Fee Item */}
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-sm">
                <div className="collapse-title text-xl font-medium">
                    Citizenship starts from $800
                </div>
                <div className="collapse-content">
                    <p>1st Installment $800: At Engagement</p>
                    <p>2nd Installment: At File Submission for Citizenship</p>
                </div>
            </div>
            {/* Fee Item */}
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-sm">
                <div className="collapse-title text-xl font-medium">
                    Super Visa starts from $960
                </div>
                <div className="collapse-content">
                    <p>1st Installment $960: At Engagement</p>
                    <p>2nd Installment: At File Submission for Super Visa</p>
                </div>
            </div>
            {/* Fee Item */}
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-sm">
                <div className="collapse-title text-xl font-medium">
                    LMIA starts from $2,800
                </div>
                <div className="collapse-content">
                    <p>1st Installment $1000: At Engagement</p>
                    <p>2nd Installment: At File Submission for LMIA</p>
                </div>
            </div>
            {/* Fee Item */}
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-sm">
                <div className="collapse-title text-xl font-medium">
                    Work Permit starts from $1600
                </div>
                <div className="collapse-content">
                    <p>1st Installment $1600: At Engagement</p>
                    <p>2nd Installment: At File Submission for Work Permit</p>
                </div>
            </div>
        </div>
    );
};

export default Fees;