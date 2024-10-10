const WorkProcess = () => {
  return (
    <section className="work-process bg-gray-50 px-[10%] py-[5%]" id="process">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-[#636363]">Our Work Process</h2>

        <div className="process-step mb-6">
          <h3 className="text-3xl md:text-4xl font-semibold mb-4 text-[#636363]">Step 1: Understanding Client Needs</h3>
          <p className="text-lg md:text-2xl mb-4 text-[#7c7c7c]">
            We start by listening to our clients specific requirements. This helps us identify the right candidate for the job, ensuring we meet their expectations precisely.
          </p>
          <ul className="list-disc list-inside text-lg md:text-2xl text-[#7c7c7c]">
            <li>Detailed understanding of the job role</li>
            <li>Company culture assessment</li>
            <li>Gathering information about skills and qualifications</li>
          </ul>
        </div>

        <div className="process-step mb-6">
          <h3 className="text-3xl md:text-4xl font-semibold mb-4 text-[#636363]">Step 2: Candidate Screening </h3>
          <p className="text-lg md:text-2xl mb-4 text-[#7c7c7c]">
            Our rigorous screening process ensures we only present qualified and pre-screened candidates to our clients. We value quality over quantity.
          </p>
          <ul className="list-disc list-inside text-lg md:text-2xl text-[#7c7c7c]">
            <li>Resume shortlisting</li>
            <li>Background and reference checks</li>
            <li>Skill and personality assessments</li>
          </ul>
        </div>

        <div className="process-step mb-6">
          <h3 className="text-3xl md:text-4xl font-semibold mb-4 text-[#636363]">Step 3: Candidate Presentation</h3>
          <p className="text-lg md:text-2xl mb-4 text-[#7c7c7c]">
            Once the screening is complete, we present only the top candidates to our clients for interviews, ensuring they match the job requirements and company culture.
          </p>
          <ul className="list-disc list-inside text-lg md:text-2xl text-[#7c7c7c]">
            <li>Submit shortlisted resumes</li>
            <li>Organize interviews with top candidates</li>
            <li>Follow-up and interview coordination</li>
          </ul>
        </div>

        <div className="process-step mb-6">
          <h3 className="text-3xl md:text-4xl font-semibold mb-4 text-[#636363]">Step 4: Final Placement & Support</h3>
          <p className="text-lg md:text-2xl mb-4 text-[#7c7c7c]">
            We assist in finalizing the hiring process and provide support post-placement to ensure a smooth transition for both the client and the new hire.
          </p>
          <ul className="list-disc list-inside text-lg md:text-2xl text-[#7c7c7c]">
            <li>Offer negotiation and acceptance</li>
            <li>Onboarding assistance</li>
            <li>Post-placement follow-up</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
