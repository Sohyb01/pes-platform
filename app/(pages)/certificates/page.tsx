import { certificatesData } from "@/lib/certificates";
import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";

// Returns certificate based on its ID from the array, or `null` if the ID doesnt belong to any of the certificates in the array
const checkIfCertificateExistsById = async (id: string | undefined) => {
  return certificatesData.find((item) => item.id === id) || null;
};

async function onSubmit(formData: FormData) {
  "use server";
  redirect(`?id=${formData.get("certificateId")}`);
}

const CertificatesPage = async ({
  searchParams,
}: {
  searchParams: {
    id: string | undefined;
  };
}) => {
  const certificateData = await checkIfCertificateExistsById(searchParams.id);

  return (
    <main className="w-full max-w-none overflow-hidden">
      <section className="w-full">
        <div className="container flex flex-col lg:flex-row items-center lg:items-start text-start section-px py-[100px] pt-[140px] text-foreground gap-8 justify-start lg:justify-center">
          {/* Header and Subheader and Input container */}
          <div className="flex flex-col gap-6 w-full max-w-[448px] text-start items-start">
            <h1 className="text-h2 w-full">Certificate Verification</h1>
            <p className="">
              Enter the serial number on the top corner of your certificate
              below to view your certificate
            </p>
            {/* Inputs */}
            <form
              action={onSubmit}
              className="flex flex-row gap-4 text-subtle items-end w-full"
            >
              <div className="pes-input-and-label-container text-subtle">
                Certificate Number
                <input
                  className="bg-white px-3 py-2 border-[1px] border-solid border-border rounded-md w-[138px]"
                  type="text"
                  name="certificateId"
                  id="certificateId"
                  defaultValue={searchParams.id ? searchParams.id : undefined}
                />
              </div>
              <button
                className={`h-fit text-white text-center bg-primary px-4 py-2 rounded-md w-fit`}
                type="submit"
              >
                View Certificate
              </button>
            </form>
          </div>
          {/* Certificate  Image Container */}
          <div className="relative w-full aspect-[1389/986] max-w-[448px] grid place-items center shadow-lg">
            {/* Inner Image Container for Padding */}
            {certificateData && (
              <Image
                fill
                alt="Certificate"
                src={`/certificates/${certificateData?.id}.jpg`}
              />
            )}
            {!certificateData && searchParams.id && (
              <p className="text-detail text-red-600 my-auto mx-auto">
                Oops! No certificate found with ID: {searchParams.id}
              </p>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default CertificatesPage;
