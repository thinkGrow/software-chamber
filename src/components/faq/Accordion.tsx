// import React from 'react';

const Accordion = () => {
  return (
    <div className="join join-vertical bg-base-100 w-full text-left">
      <div className="collapse collapse-arrow join-item border-base-300 border">
        <input type="radio" name="my-accordion-4" defaultChecked />
        <div className="collapse-title font-semibold">
          What software development services does your company offer?
        </div>
        <div className="collapse-content text-sm">
          Click the "Sign Up" button in the top right corner and follow the
          registration process.
        </div>
      </div>
      <div className="collapse collapse-arrow join-item border-base-300 border">
        <input type="radio" name="my-accordion-4" />
        <div className="collapse-title font-semibold">
          What industries do you specialize in?
        </div>
        <div className="collapse-content text-sm">
          Click on "Forgot Password" on the login page and follow the
          instructions sent to your email.
        </div>
      </div>
      <div className="collapse collapse-arrow join-item border-base-300 border">
        <input type="radio" name="my-accordion-4" />
        <div className="collapse-title font-semibold">
          What sets your company apart from the competition?
        </div>
        <div className="collapse-content text-sm">
          Go to "My Account" settings and select "Edit Profile" to make changes.
        </div>
      </div>
      <div className="collapse collapse-arrow join-item border-base-300 border">
        <input type="radio" name="my-accordion-4" />
        <div className="collapse-title font-semibold">
          Is my project idea and information kept confidential?
        </div>
        <div className="collapse-content text-sm">
          Go to "My Account" settings and select "Edit Profile" to make changes.
        </div>
      </div>
    </div>
  );
};

export default Accordion;
