import React from 'react';
import Footer from '../Shared/Footer/Footer';

const About = () => {
    return (
        <div>
            <h2>This is about</h2>
            <div class="hero min-h-screen bg-teal-300">
                <div class="hero-content text-center">
                    <div class="max-w-md">
                        <h1 class="text-5xl font-bold">Doctors Portals</h1>
                        <p class="py-6">Doctors Chambers was established in 1994 to provide expert medical evidence in all medical disciplines on a truly national basis. in the early stages the company was a niche medico-legal practice in Oxford, predominantly providing medical evidence in cases of alleged clinical negligence. The company rapidly grew to provide national coverage and changed it's focus to personal injury. The company currently utilises a panel of over 5,000 medical experts and therapists enabling an efficient turnaround of cases whilst ensuring the highest level of medical evidence and clinical governance.

                            We provide a one stop solution to providing medical evidence and all associated ancillary services such as sourcing of medical records, diagnostics (including CT/MRI scans) and therapautic interventions as appropriate. We aim to be entirely independent and enjoy significant instructions from both the claimant and defendant sectors of our industry. We are a founder member of the Association of Medical Reporting Organisations (AMRO), a union focused on the promotion of professional standards within the medico-legal industry.</p>
                        {/* <button class="btn btn-primary">Get Started</button> */}
                    </div>
                </div>
            </div>
            
            <Footer></Footer>
        </div>
    );
};

export default About;