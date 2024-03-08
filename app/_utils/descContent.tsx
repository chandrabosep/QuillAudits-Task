import React from "react";

export const desc2 = [
  {
    title: "Information Gathering:",
    list: [
      <li className="list-disc ">
        Collected and reviewed all relevant documentation, including whitepaper,
        technical specifications, and design documents.
      </li>,
      <li>
        Obtained a clear understanding of the CDP platform's functionality,
        economic model, and intended user interactions.
      </li>,
      <li>
        Discussed client concerns and specific areas of focus for the audit.
      </li>,
    ],
  },
  {
    title: "Manual Code Review:",
    sub: "Conducted a line-by-line review of the smart contract code, focusing on:",
    list: [
      <li>
        <span>Vulnerability identification:</span>
        <span>{`Searching for known vulnerabilities like reentrancy, front-running, integer overflows, and access control issues etc.`}</span>
      </li>,
      <li>
        <span>Logic flaws:</span>
        <span>{`Identifying inconsistencies or unintended behaviors in the code logic.`}</span>
      </li>,
      <li>
        <span>Tokenomics correctness:</span>
        <span>{`Verifying if the code accurately implements the intended economic model and token distribution mechanisms.`}</span>
      </li>,
      <li>
        <span>Solidity best practices:</span>
        <span>{`Compliance with secure coding standards and adherence to established guidelines.`}</span>
      </li>,
    ],
  },
  {
    title: "Functional Testing:",
    list: [
      <li>
        Developed and executed a comprehensive set of test cases covering
        various user interactions and edge cases.
      </li>,
      <li>
        Simulated different deposit, claim, and referral scenarios to assess
        functionality and uncover potential exploits.
      </li>,
      <li>
        Focused on scenarios identified during the manual review and client
        concerns (e.g., infinite minting, reward calculation errors).
      </li>,
      <li>
        Leveraged tools like Hardhat and Ganache to deploy and test the smart
        contract locally.
      </li>,
    ],
  },
  {
    title: "Automated Testing:",
    list: [
      <li>
        Employed static analysis tools like Slither to identify vulnerabilities
        through automated code scanning.
      </li>,
      <li>
        Utilized symbolic execution tools like Mythril to explore various code
        execution paths and uncover potential attack vectors.
      </li>,
      <li>
        Integrated unit tests are written by the CDP team to verify specific
        contract functions and their behaviour.
      </li>,
    ],
  },
  {
    title: "Reporting & Remediation:",
    list: [
      <li>
        Prepared a detailed report outlining all identified vulnerabilities,
        categorized by severity and potential impact.
      </li>,
      <li>
        Provided clear recommendations for fixing each vulnerability, including
        code snippets and best practices.
      </li>,
      <li>
        Collaborated with the CDP team to prioritize and address the identified
        issues.
      </li>,
      <li>
        Conducted additional verification testing after vulnerability fixes were
        implemented.
      </li>,
    ],
  },
];
