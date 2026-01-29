import React, { useState } from "react";

function Faq() {
  const faqs = [
    {
      question: "What is a Zerodha account",
      answer:
        "A Zerodha account is a combined demat and trading account that allows investors to buy, sell, and hold securities digitally.",
    },
    {
      question: "What documents are required to open a demat account?",
      answer: (
        <ul className="mt-2">
          <li>PAN number</li>
          <li>Aadhaar Card (linked with phone number for OTP verification)</li>
          <li>Cancelled cheque or bank account statement</li>
          <li>
            Income proof (required only if you wish to trade in Futures & Options)
          </li>
        </ul>
      ),
    },
    {
      question: "Is Zerodha account opening free?",
      answer: "Yes, it is completely free.",
    },
    {
      question: "Are there any maintenance charges for a demat account?",
      answer:
        "The account maintenance charges depend on the account type. For BSDA: zero charges if holdings are below ₹4,00,000. For non-BSDA accounts: ₹300 per year + GST.",
    },
    {
      question: "Can I open a demat account without a bank account?",
      answer:
        "You must have a bank account in your name. If UPI verification succeeds, bank proof is not required. Otherwise, a cancelled cheque or bank statement is needed.",
    },
    {
      question: "What is a Basic Services Demat Account (BSDA)?",
      answer:
        "BSDA is designed for retail investors with smaller holdings. No AMC for holdings up to ₹4 lakhs, and ₹25 per quarter if holdings are between ₹4–10 lakhs.",
    },
    {
      question: "Can I open a demat and trading account using the mobile app?",
      answer:
        "Yes. You can open an account completely online using the Zerodha Kite mobile app on Android and iOS.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10">
          <h2 className="mb-4 fw-semibold">FAQs</h2>

          {faqs.map((item, index) => (
            <div
              key={index}
              className="border-bottom py-3"
            >
              {/* Question */}
              <div
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="d-flex justify-content-between align-items-center"
                style={{ cursor: "pointer", fontSize: "16px", fontWeight: 500 }}
              >
                <span>{item.question}</span>
                <span
                  style={{
                    transform:
                      openIndex === index ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "0.2s",
                  }}
                >
                  ⌄
                </span>
              </div>

              {/* Answer */}
              {openIndex === index && (
                <div
                  className="mt-3"
                  style={{
                    color: "#555",
                    fontSize: "15px",
                    lineHeight: "1.6",
                  }}
                >
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Faq;
