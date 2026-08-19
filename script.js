const state = {
  exercise: "medical",
  dataset: "one",
  medicalExtra: 0
};

const medicalData = {
  one: {
    workerAppId: "712041",
    submitted: "March 28, 2024 20:43",
    claimNo: "20042047",
    worker: "Madeleine Willson",

    prescription: [
      [
        "Naproxen",
        "February 28, 2024",
        "February 29, 2024",
        "Dr. Best",
        "$20.00"
      ]
    ],

    otc: [
      [
        "Advil",
        "March 28, 2024",
        "$8.00",
        "Shoppers Drug Mart",
        "Pain"
      ]
    ],

    supplies: [
      [
        "Tensor",
        "February 28, 2024",
        "Yes",
        "Dr. Best",
        "$10.00",
        "Shoppers DrugMart"
      ]
    ],

    parking: [
      [
        "333 St Mary Ave, Winnipeg MB R3C4A5, Canada",
        "March 28, 2024",
        "$10.00",
        "yes",
        "12245"
      ]
    ],

    mileage: [
      [
        "March 28, 2024",
        "HSC, 820 Sherbrook St, Winnipeg MB R3A 1R9, Canada",
        "WCB, 333 Broadway, Winnipeg MB R3C 4W3, Canada",
        "20 km"
      ]
    ],

    taxi: [
      [
        "March 28, 2024",
        "",
        "HSC Winnipeg Women’s Hospital, 665 William Ave, Winnipeg MB R3E 0Z2, Canada",
        "Bus",
        "$3.00"
      ],
      [
        "March 27, 2024",
        "25 Furby St, Winnipeg MB R3C2A2, Canada",
        "440 Edmonton St, Winnipeg MB R3B 2M4, Canada",
        "Taxi",
        "$15.00"
      ]
    ]
  },

  two: {
    workerAppId: "845193",
    submitted: "April 12, 2024 14:10",
    claimNo: "20051128",
    worker: "Jordan Miller",

    prescription: [
      [
        "Ibuprofen",
        "April 1, 2024",
        "April 2, 2024",
        "Dr. Singh",
        "$18.50"
      ],
      [
        "Amoxicillin",
        "April 4, 2024",
        "April 5, 2024",
        "Dr. Chen",
        "$32.00"
      ],
      [
        "Voltaren",
        "April 6, 2024",
        "April 7, 2024",
        "Dr. Chen",
        "$14.75"
      ]
    ],

    otc: [
      [
        "Tylenol",
        "April 8, 2024",
        "$9.00",
        "Rexall",
        "Headache"
      ],
      [
        "Cold Relief",
        "April 9, 2024",
        "$11.50",
        "Shoppers Drug Mart",
        "Cold symptoms"
      ]
    ],

    supplies: [
      [
        "Wrist Brace",
        "April 2, 2024",
        "Yes",
        "Dr. Singh",
        "$24.00",
        "Rexall"
      ],
      [
        "Gauze",
        "April 8, 2024",
        "No",
        "—",
        "$7.25",
        "Shoppers Drug Mart"
      ]
    ],

    parking: [
      [
        "100 Main St, Winnipeg MB R3C 1A2, Canada",
        "April 8, 2024",
        "$12.00",
        "yes",
        "8721"
      ],
      [
        "820 Sherbrook St, Winnipeg MB R3A 1R9, Canada",
        "April 9, 2024",
        "$8.00",
        "no",
        "—"
      ]
    ],

    mileage: [
      [
        "April 8, 2024",
        "HSC, 820 Sherbrook St, Winnipeg MB R3A 1R9, Canada",
        "WCB, 333 Broadway, Winnipeg MB R3C 4W3, Canada",
        "18 km"
      ],
      [
        "April 9, 2024",
        "100 Main St, Winnipeg MB R3C 1A2, Canada",
        "WCB, 333 Broadway, Winnipeg MB R3C 4W3, Canada",
        "24 km"
      ]
    ],

        taxi: [
      [
        "April 10, 2024",
        "10 Portage Ave, Winnipeg MB R3B 2E4, Canada",
        "HSC Winnipeg, 820 Sherbrook St, Winnipeg MB R3A 1R9, Canada",
        "Taxi",
        "$21.00"
      ],
      [
        "April 11, 2024",
        "",
        "Pan Am Clinic, 75 Poseidon Bay, Winnipeg MB R3M 3E6, Canada",
        "Bus",
        "$4.00"
      ]
    ]
  },

  empty: {
    workerAppId: "712041",
    submitted: "March 28, 2024 20:43",
    claimNo: "20042047",
    worker: "Madeleine Willson",

    prescription: [],
    otc: [],
    supplies: [],
    parking: [],
    mileage: [],
    taxi: []
  }
};


const progressData = {

  one: {
    workerAppId: "712041",
    submitted: "March 19, 2024 19:21",
    claimNo: "20042047",
    worker: "Madeleine Willson",

    date: "March 15, 2024",

    returnStatus: "returned",

    workType: "modified-reduced",

    returnText: "Terrible. Testing Testing",

    recovered: "yes",

    pain: 5,

    treatment: "continuing",

    providerType: "Physiotherapist",

    lastTreatmentDate: "",
    lastProvider: "",

    nextTreatmentDate: "",
    nextProvider: "",

    therapyFrequency: "",

    medication: "no",

    medicationName: "",

    exercises: "no",

    exerciseList: "",

    concerns: "",

    recoveryComments: "",

    otherInfo: "No info Testing Testing"
  },


  two: {
    workerAppId: "845193",
    submitted: "April 12, 2024 14:10",
    claimNo: "20051128",
    worker: "Jordan Miller",

    date: "April 10, 2024",

    returnStatus: "returned",

    workType: "full-regular",

    returnText: "My recovery is progressing well.",

    recovered: "no",

    pain: 3,

    treatment: "continuing",

    providerType: "Chiropractor",

    lastTreatmentDate: "April 5, 2024",
    lastProvider: "Dr. Adams",

    nextTreatmentDate: "April 17, 2024",
    nextProvider: "Dr. Adams",

    therapyFrequency: "Twice a week",

    medication: "yes",

    medicationName: "Naproxen",

    exercises: "yes",

    exerciseList:
      "Stretching, walking and prescribed mobility exercises.",

    concerns:
      "I am concerned about returning to full duties too quickly.",

    recoveryComments:
      "Pain has reduced and mobility is improving.",

    otherInfo:
      "Requested follow-up guidance from the case manager."
  }
};


/* =========================
   HELPER FUNCTIONS
========================= */

function esc(value) {

  return String(value ?? "")
    .replace(/[&<>"']/g, ch => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;"
    }[ch]));

}


function check(on) {

  return `
    <span class="checkbox ${on ? "checked" : ""}"></span>
  `;

}


function table(headers, rows, widths = []) {

  const col = widths.length
    ? widths
        .map(width => `<col style="width:${width}">`)
        .join("")
    : "";

  const bodyContent = rows.length
    ? rows
        .map(row => `
          <tr>
            ${row
              .map(value => `
                <td class="dynamic">
                  ${esc(value)}
                </td>
              `)
              .join("")}
          </tr>
        `)
        .join("")
    : `
      <tr>
        <td class="dynamic empty-row" colspan="${headers.length}">
          No entries submitted in this category.
        </td>
      </tr>
    `;

  return `
    <table>

      ${col}

      <thead>
        <tr>
          ${headers
            .map(header => `<th>${header}</th>`)
            .join("")}
        </tr>
      </thead>

      <tbody>
        ${bodyContent}
      </tbody>

    </table>
  `;
}


/* =========================
   MEDICAL HEADER
========================= */

function medicalPageHeader(d, title, pageCode = "") {

  return `

    <header class="doc-header">

      <img
        class="logo"
        src="assets/wcb-logo-medical.jpg"
        alt="WCB Manitoba"
      >

      <div class="contact">

        333 Broadway<br>
        Winnipeg, MB R3C 4W3<br>
        Phone: (204) 954-4321<br>
        Toll Free: 1-855-954-4321<br>
        wcb.mb.ca

      </div>

      <div class="title-block">

        <h1 class="title">
          ${title}
        </h1>

        <div class="claim">
          Claim No. ${esc(d.claimNo)}

          ${
            pageCode
              ? `&nbsp; ${pageCode}`
              : ""
          }

        </div>

      </div>

    </header>

  `;
}


/* =========================
   MEDICAL PAGE 1
========================= */

function medicalPage1(d) {

  return `

    <section class="page">

      ${medicalPageHeader(
        d,
        "Medical & Travel Expense<br>Request"
      )}

      <p class="intro">

        <span class="dynamic">
          ${esc(d.worker)}
        </span>

        requested reimbursement for the following
        medical and/or travel expenses:

      </p>


      <h2 class="section-title">
        Prescription Drugs
      </h2>

      ${table(
        [
          "Drug Name",
          "Prescription Date",
          "Date Purchased",
          "Healthcare Provider Name",
          "Paid Amount"
        ],
        d.prescription,
        [
          "22%",
          "18%",
          "18%",
          "32%",
          "10%"
        ]
      )}


      <h2 class="section-title">
        Over-the-Counter Drugs
      </h2>

      ${table(
        [
          "Drug Name",
          "Date Purchased",
          "Paid Amount",
          "Seller's Name",
          "Reason for Purchasing"
        ],
        d.otc,
        [
          "22%",
          "18%",
          "12%",
          "24%",
          "24%"
        ]
      )}


      <h2 class="section-title">
        Bandages, Braces or Other Medical Supplies
      </h2>

      ${table(
        [
          "Item Purchased",
          "Date Purchased",
          "Was this Prescribed?",
          "Healthcare Provider Name",
          "Paid Amount",
          "Seller's Name"
        ],
        d.supplies,
        [
          "20%",
          "11%",
          "12%",
          "25%",
          "11%",
          "21%"
        ]
      )}


      <h2 class="section-title">
        Parking for Medical Appointments
      </h2>

      ${table(
        [
          "Address of Healthcare Provider/Medical Facility",
          "Date",
          "Paid Amount",
          "Meter Used?",
          "Meter Number"
        ],
        d.parking,
        [
          "40%",
          "18%",
          "15%",
          "13%",
          "14%"
        ]
      )}


      <h2 class="section-title">
        Mileage to Medical Appointments
      </h2>

      <p class="note">

        The WCB will generally reimburse only those
        transportation costs which are in excess of
        costs that would be incurred by the worker
        while travelling to and from work.

      </p>


      ${table(
        [
          "Appointment Date",
          "Address of Healthcare Provider/Medical Facility",
          "Address of Workplace",
          "Number of km (Round Trip)"
        ],
        d.mileage,
        [
          "17%",
          "35%",
          "31%",
          "17%"
        ]
      )}


      ${medicalFooter(d, 1, 2)}

    </section>

  `;
}


/* =========================
   MEDICAL PAGE 2
========================= */

function medicalPage2(d) {

  return `

    <section class="page">

      <h2
        class="section-title"
        style="margin-top:0"
      >
        Bus or Taxi Fare for Medical Appointments<sup>*</sup>
      </h2>


      <p class="note">

        <strong>*Note:</strong>

        Pre-approval is required from your WCB
        representative to claim taxi fare(s).

      </p>


      ${table(
        [
          "Appointment Date",
          "Address of Starting Point",
          "Address of Healthcare Provider/Medical Facility",
          "Bus or Taxi (indicate one)",
          "Total Fare Paid"
        ],
        d.taxi,
        [
          "14%",
          "29%",
          "34%",
          "13%",
          "10%"
        ]
      )}


      <div
        style="
          border-top:1px solid #aaa;
          margin-top:22px;
          padding-top:18px;
          font-size:13px;
        "
      >

        ${check(true)}

        I understand that the

        <span
          style="
            color:#0564a5;
            text-decoration:underline;
          "
        >
          Privacy Notice
        </span>

        applies to the personal information
        collected in this document.

      </div>


      ${medicalFooter(d, 2, 2)}

    </section>

  `;
}


function medicalFooter(d, page, total) {

  return `

    <footer class="footer">

      <span>
        Worker App ID: ${esc(d.workerAppId)}
      </span>

      <span>

        Submitted:
        ${esc(d.submitted)}

        <br>

        <span class="page-no">
          Page ${page} of ${total}
        </span>

      </span>

    </footer>

  `;
}


/* =========================
   PROGRESS HEADER
========================= */

function progressHeader(d) {

  return `

    <header class="doc-header progress-header">

      <img
        class="logo"
        src="assets/wcb-logo-progress.jpg"
        alt="WCB Manitoba"
      >

      <div class="contact">

        333 Broadway<br>
        Winnipeg, MB R3C 4W3<br>
        Phone: (204) 954-4321<br>
        Toll Free: 1-855-954-4321<br>
        wcb.mb.ca

      </div>

      <div class="title-block">

        <h1 class="title">
          Worker Progress Report
        </h1>

        <div class="claim">

          Claim No.
          ${esc(d.claimNo)}
          &nbsp; WP

        </div>

      </div>

    </header>

  `;
}


/* =========================
   PROGRESS PAGE 1
========================= */

function progressPage1(d) {

  return `

    <section class="page">

      ${progressHeader(d)}


      <p class="progress-intro">

        <span class="dynamic">
          ${esc(d.worker)}
        </span>

        provided the following updates
        in relation to their claim:

      </p>


      <h2 class="progress-section-title">
        Return to Work
      </h2>


      <div class="return-box">

        <div
          style="
            font-size:12px;
            margin-bottom:8px;
          "
        >
          Select one:
        </div>


        <div class="return-top">

          <div class="choice">

            ${check(
              d.returnStatus === "not-missed"
            )}

            I have not missed<br>
            time from work

          </div>


          <div class="choice">

            ${check(
              d.returnStatus === "not-returned"
            )}

            I have not returned<br>
            to work

          </div>


          <div class="choice">

            ${check(
              d.returnStatus === "returned"
            )}

            I returned to work on:

            <span class="dynamic">
              ${esc(d.date)}
            </span>

          </div>

        </div>

      </div>


      <div class="return-box">

        <div
          style="
            font-size:12px;
            margin-bottom:8px;
          "
        >
          I am working:
        </div>


        <div class="duty-grid">

          <div class="choice">

            ${check(
              d.workType === "full-regular"
            )}

            Full duties, regular<br>
            hours

          </div>


          <div class="choice">

            ${check(
              d.workType === "full-reduced"
            )}

            Full duties, reduced<br>
            hours

          </div>


          <div class="choice">

            ${check(
              d.workType === "modified-regular"
            )}

            Modified duties,<br>
            regular hours

          </div>


          <div class="choice">

            ${check(
              d.workType === "modified-reduced"
            )}

            Modified duties,<br>
            reduced hours

          </div>

        </div>


        <div class="other-line choice">

          ${check(false)}

          Other:

          <span class="line-field"></span>

        </div>

      </div>


      <div class="progress-box">

        <div style="font-size:13px;">

          My return to work is going:

        </div>

        <div
          class="dynamic"
          style="
            margin-top:7px;
            color:#164f86;
          "
        >

          ${esc(d.returnText)}

        </div>

      </div>


      <div
        style="
          margin:24px 10px 20px;
          font-size:13px;
        "
      >

        I expect to return to work on:

        <span class="line-field"></span>

        <div
          class="field-label"
          style="
            width:170px;
            margin-left:255px;
          "
        >
          Date
        </div>

      </div>


      <div class="progress-box">

        <div
          style="
            font-size:13px;
            margin-bottom:8px;
          "
        >

          I have the following concerns
          about returning to work:

        </div>

        <div class="text-area">

          ${esc(d.concerns)}

        </div>

      </div>


      <div
        style="
          margin:28px 8px 24px;
          font-size:13px;
        "
      >

        I was most recently in contact with:

        <span
          class="line-field"
          style="min-width:170px;"
        ></span>

        &nbsp; on &nbsp;

        <span
          class="line-field"
          style="min-width:130px;"
        ></span>

        <div
          style="
            display:flex;
            gap:220px;
            margin-left:190px;
          "
        >

          <div class="field-label">
            Name of employer contact
          </div>

          <div class="field-label">
            Date
          </div>

        </div>

      </div>


      <h2 class="progress-section-title">
        Recovery
      </h2>


      <div class="return-box">

        <div
          style="
            font-size:12px;
            margin-bottom:10px;
          "
        >
          Select one:
        </div>


        <div class="recovery-grid">

          <div class="choice">

            ${check(
              d.recovered === "no"
            )}

            I have not fully recovered
            from my workplace injury.

          </div>


          <div class="choice">

            ${check(
              d.recovered === "yes"
            )}

            I have fully recovered
            from my workplace injury.

          </div>

        </div>

      </div>


      <div class="progress-box">

        <div
          style="
            font-size:13px;
            margin-bottom:8px;
          "
        >

          I have provided the following
          comments about my recovery:

        </div>

        <div class="text-area">

          ${esc(d.recoveryComments)}

        </div>

      </div>


      ${progressFooter(d, 1, 3)}

    </section>

  `;
}


/* =========================
   PROGRESS PAGE 2
========================= */

function progressPage2(d) {

  const pains = Array
    .from({ length: 10 }, (_, i) => i + 1)
    .map(number => `

      <div class="choice">

        ${check(
          d.pain === number
        )}

        ${number}

      </div>

    `)
    .join("");


  return `

    <section class="page">


      <div
        style="
          display:grid;
          grid-template-columns:1.35fr 1fr;
          gap:15px;
          align-items:start;
          margin-top:0;
        "
      >

        <div
          style="
            font-size:14px;
            line-height:1.15;
          "
        >

          I rate my current pain/discomfort
          on a scale of 1-10,

          <br>

          where 1 is no pain and 10 is
          severe pain out of 10.

        </div>


        <div
          style="
            display:grid;
            grid-template-columns:
              repeat(5,1fr);
            gap:10px 16px;
            font-size:13px;
          "
        >

          ${pains}

        </div>

      </div>


      <div class="progress-box">

        <div
          style="
            font-size:12px;
            margin-bottom:10px;
          "
        >
          Select one:
        </div>


        <div class="medical-choice">

          <div class="choice">

            ${check(
              d.treatment === "not-continuing"
            )}

            I am not continuing to receive
            medical treatment for my
            workplace injury.

          </div>


          <div class="choice">

            ${check(
              d.treatment === "continuing"
            )}

            I am continuing to receive
            medical treatment for my
            workplace injury from:

          </div>


          <div class="field">

            <span
              class="line-field"
              style="min-width:210px;"
            ></span>

            <div class="field-label">
              (Medical Provider Type)
            </div>

            <div class="dynamic">
              ${esc(d.providerType)}
            </div>

          </div>

        </div>

      </div>


            <div class="two-fields">

        <div class="field">

          My last medical treatment was

          <span class="line-field"></span>

          <div class="field-label">
            Date
          </div>

          <div class="dynamic">
            ${esc(d.lastTreatmentDate)}
          </div>

        </div>


        <div class="field">

          from

          <span class="line-field"></span>

          <div class="field-label">
            (Medical Provider Name)
          </div>

          <div class="dynamic">
            ${esc(d.lastProvider)}
          </div>

        </div>

      </div>


      <div class="two-fields">

        <div class="field">

          My next medical treatment is

          <span class="line-field"></span>

          <div class="field-label">
            Date
          </div>

          <div class="dynamic">
            ${esc(d.nextTreatmentDate)}
          </div>

        </div>


        <div class="field">

          from

          <span class="line-field"></span>

          <div class="field-label">
            (Medical Provider Name)
          </div>

          <div class="dynamic">
            ${esc(d.nextProvider)}
          </div>

        </div>

      </div>


      <div class="two-fields">

        <div class="field">

          My next medical treatment is

          <span class="line-field"></span>

          <div class="field-label">
            ${esc(d.nextTreatmentDate)}
          </div>

        </div>


        <div class="field">

          from

          <span class="line-field"></span>

          <div class="field-label">
            ${esc(d.nextProvider)}
          </div>

        </div>

      </div>


            <div
        style="
          margin:34px 6px;
          font-size:14px;
        "
      >

        I am attending a Chiropractor
        or Physiotherapist

        <span
          class="line-field"
          style="min-width:250px;"
        ></span>

        <div
          class="field-label"
          style="margin-left:250px;"
        >

          (Frequency)

        </div>

        <div
          class="dynamic"
          style="margin-left:250px;"
        >

          ${esc(d.therapyFrequency)}

        </div>

      </div>


      <div class="progress-box">

        <div
          style="
            font-size:12px;
            margin-bottom:10px;
          "
        >
          Select one:
        </div>


        <div class="medical-choice">

          <div class="choice">

            ${check(
              d.medication === "no"
            )}

            I am not taking medication
            for my workplace injury.

          </div>


          <div class="choice">

            ${check(
              d.medication === "yes"
            )}

            I am taking medication for
            my workplace injury:

          </div>


          <div class="field">

            <span
              class="line-field"
              style="min-width:210px;"
            ></span>

            <div class="field-label">

              (Name of prescribed medication)

            </div>

            <div class="dynamic">

              ${esc(d.medicationName)}

            </div>

          </div>

        </div>

      </div>


      <div class="progress-box">

        <div
          style="
            font-size:12px;
            margin-bottom:10px;
          "
        >
          Select one:
        </div>


        <div class="recovery-grid">

          <div class="choice">

            ${check(
              d.exercises === "no"
            )}

            I am not doing home exercises
            for my workplace injury.

          </div>


          <div class="choice">

            ${check(
              d.exercises === "yes"
            )}

            I am doing home exercises
            for my workplace injury.

          </div>

        </div>

      </div>


      <div class="progress-box">

        <div
          style="
            font-size:13px;
            margin-bottom:8px;
          "
        >

          List the exercises you are doing:

        </div>


        <div class="text-area tall">

          ${esc(d.exerciseList)}

        </div>

      </div>


      <h2
        class="progress-section-title"
        style="margin-top:20px;"
      >
        Other Information
      </h2>


      <div class="progress-box">

        <div
          style="
            font-size:13px;
            margin-bottom:8px;
          "
        >

          I would like to provide the
          following additional information
          about my claim/injury:

        </div>


        <div
          class="dynamic"
          style="color:#164f86;"
        >

          ${esc(d.otherInfo)}

        </div>

      </div>


      ${progressFooter(d, 2, 3)}

    </section>

  `;
}


/* =========================
   PROGRESS PAGE 3
========================= */

function progressPage3(d) {

  return `

    <section class="page">


      <div class="certification">


        <div class="cert-row">

          ${check(true)}

          <span>

            I certify that the information
            given on this form is true,
            correct and complete to the best
            of my knowledge.

            I agree to notify the Workers
            Compensation Board of Manitoba
            (WCB) immediately once I return
            to any form of work and/or
            employment.

            I understand that it is an
            offence to knowingly make a
            false statement to the WCB.

            I also understand that it is an
            offence to withhold information
            from WCB which affects my
            entitlement to compensation.

          </span>

        </div>


        <div class="cert-row">

          ${check(true)}

          <span>

            I understand that the

            <span
              style="
                color:#0564a5;
                text-decoration:underline;
              "
            >
              Privacy Notice
            </span>

            applies to the personal
            information collected in this
            document.

          </span>

        </div>


      </div>


      ${progressFooter(d, 3, 3)}

    </section>

  `;
}


/* =========================
   FOOTER
========================= */

function progressFooter(d, page, total) {

  return `

    <footer class="footer">

      <span>

        Worker App ID:
        ${esc(d.workerAppId)}

      </span>


      <span>

        Submitted:
        ${esc(d.submitted)}

        <br>

        <span class="page-no">

          Page ${page} of ${total}

        </span>

      </span>

    </footer>

  `;
}


/* =========================
   MAIN RENDER FUNCTION
========================= */

function render() {

  const app =
    document.getElementById("app");


  if (state.exercise === "medical") {

    const d =
      medicalData[state.dataset];


    app.innerHTML = `

      <div class="document">

        ${medicalPage1(d)}

        ${medicalPage2(d)}

      </div>

    `;

  } else {

    const d =
      progressData[state.dataset];


    app.innerHTML = `

  <div class="document progress-document">

    ${progressPage1(d)}

    ${progressPage2(d)}

    ${progressPage3(d)}

  </div>

`;
  }

}


/* =========================
   EXERCISE SWITCH
========================= */

document
  .getElementById("exerciseSelect")
  .addEventListener(
    "change",
    event => {

      state.exercise =
        event.target.value;

      state.dataset = "one";

      document
        .getElementById("datasetSelect")
        .value = "one";

      render();

    }
  );


/* =========================
   DATASET SWITCH
========================= */

document
  .getElementById("datasetSelect")
  .addEventListener(
    "change",
    event => {

      state.dataset =
        event.target.value;

      render();

    }
  );


/* =========================
   ADD DYNAMIC ROW
========================= */

document
  .getElementById("addRowBtn")
  .addEventListener(
    "click",
    () => {

      if (state.exercise !== "medical") {

        alert(
          "Switch to Exercise 1 to demonstrate variable-length table data."
        );

        return;
      }

      const d =
        medicalData[state.dataset];

      state.medicalExtra++;

      // Prescription Drugs
      d.prescription.push([
        `Sample Drug ${state.medicalExtra}`,
        `April ${10 + state.medicalExtra}, 2024`,
        `April ${11 + state.medicalExtra}, 2024`,
        "Dr. Demo",
        `$${(5 + state.medicalExtra * 2).toFixed(2)}`
      ]);

      // Over-the-Counter Drugs
      d.otc.push([
        `Sample OTC Item ${state.medicalExtra}`,
        `April ${12 + state.medicalExtra}, 2024`,
        `$${(3 + state.medicalExtra).toFixed(2)}`,
        "Shoppers Drug Mart",
        "Pain relief"
      ]);

      // Mileage
      d.mileage.push([
        `April ${13 + state.medicalExtra}, 2024`,
        `Sample Clinic ${state.medicalExtra}, Winnipeg MB, Canada`,
        "WCB, 333 Broadway, Winnipeg MB R3C 4W3, Canada",
        `${5 + state.medicalExtra} km`
      ]);

      render();

    }
  );


/* =========================
   PRINT
========================= */

document
  .getElementById("printBtn")
  .addEventListener(
    "click",
    () => {

      window.print();

    }
  );


  
/* =========================
   INITIAL RENDER
========================= */

render();