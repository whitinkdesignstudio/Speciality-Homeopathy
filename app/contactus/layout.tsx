import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact Us | Speciality Homeopathy — Dr. Ketan Patel",
  description:
    "Get in touch with Speciality Homeopathy in Vastrapur, Ahmedabad. Schedule a consultation, upload clinical reports, or reach out to Dr. Ketan Patel.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
