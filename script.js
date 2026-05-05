// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    },
    {
      "type": "lab.plugins.Transmit",
      "url": "backend.php",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "",
    "description": "",
    "repository": "",
    "contributors": ""
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "html",
          "content": "\u003Cdiv style=\"max-width: 700px; margin: 0 auto; text-align: left; font-family: Times New Roman, sans-serif; line-height: 1.6;\"\u003E\r\n      \u003Ch2 style=\"text-align: center;\"\u003EInformed Consent\u003C\u002Fh2\u003E\r\n\r\n      \u003Cp\u003E Dear participant, thank you for your willingness to participate in this academic research. Our names are Veerle and Niek, and we are conducting this study as part of our MSc thesis at Eindhoven University of Technology (TU\u002Fe). The goal of this research is to investigate public knowledge and perceptions of the UK judiciary. \u003C\u002Fp\u003E\r\n\r\n      \u003Cp\u003E Your participation is entirely voluntary. You may withdraw at any point without consequence, and there are no known risks associated with taking part. All data collected will be handled confidentially and in accordance with applicable privacy regulations. \u003C\u002Fp\u003E\r\n\r\n      \u003Cp\u003EParticipation will take no more than 10 minutes. For your participation in this research project, you will receive XX euros as a token of our appreciation.\u003C\u002Fp\u003E\r\n\r\n      \u003Cp\u003E\r\n        Click the following link to read the full informed consent form:\r\n        \u003Ca href=\"${files['consent_form.pdf']}\" target=\"_blank\" style=\"color: #0077cc;\"\u003Einformed consent form (PDF)\u003C\u002Fa\u003E\r\n      \u003C\u002Fp\u003E\r\n\r\n      \u003Cp\u003E\u003Cstrong\u003EBy clicking \"I consent to participate in the study\" below, you confirm that you have read and understood the informed consent form and that you voluntarily agree to participate.\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\r\n      \r\n      \u003Cbutton id=\"agree-btn\" style=\"\r\n        display: block; margin: 20px auto;\r\n        padding: 10px 30px; font-size: 16px;\r\n        background-color: #0077cc; color: white;\r\n        border: none; border-radius: 5px; cursor: pointer;\r\n      \"\u003EI consent to participate in the study\u003C\u002Fbutton\u003E\r\n    \u003C\u002Fdiv\u003E\r\n",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue ",
      "submitButtonPosition": "hidden",
      "files": {
        "consent_form.pdf": "embedded\u002Fe95889835b7091daf419cebe916d1f26a1d52d28d3ec37f0e6266cd9275552d6.pdf"
      },
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Informed consent",
      "width": "l"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "html",
          "content": "\u003Cdiv style=\"max-width: 700px; margin: 0 auto; text-align: left; font-family: Times New Roman, sans-serif; line-height: 1.6;\"\u003E\r\n  \r\n  \u003Ch2\u003E Please read the following instructions carefully. \u003C\u002Fh2\u003E\r\n\r\n  \u003Cp\u003EYou will be presented with a series of factual statements about the UK judiciary. Read each statement carefully before proceeding to the next page.\u003C\u002Fp\u003E\r\n\r\n  \u003Cp\u003EAfter reading all statements, you will be asked questions about the content you have just read. Please pay close attention, as your ability to accurately recall this information is required to continue. Participants who cannot demonstrate sufficient recall of the material will be excluded from the study and will not receive compensation. \u003C\u002Fp\u003E\r\n\r\n  \u003Cp\u003EAfterward, you will be asked a series of questions about your perceptions of the UK judiciary. \u003C\u002Fp\u003E\r\n    \r\n\u003C\u002Fdiv\u003E",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Information",
      "width": "l"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "html",
          "content": "\u003Cdiv style=\"max-width: 700px; margin: 0 auto; text-align: left; font-family: Times New Roman, sans-serif; line-height: 1.6;\"\u003E\r\n  \r\n  \u003Ch2\u003E Fact 1 \u003C\u002Fh2\u003E\r\n  \u003Cp\u003E\r\n    In the United Kingdom, the courts are built on three core principles:\r\n    independence — judges make decisions free from external influence;\r\n    impartiality — all parties are treated equally before the law;\r\n    and integrity — judicial decisions are made honestly and without\r\n    compromise, even under pressure.\r\n  \u003C\u002Fp\u003E\r\n\r\n\u003C\u002Fdiv\u003E",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "GM1"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "html",
          "content": "\u003Cdiv style=\"max-width: 700px; margin: 0 auto; text-align: left; font-family: Times New Roman, sans-serif; line-height: 1.6;\"\u003E\r\n  \r\n  \u003Ch2\u003E Fact 2 \u003C\u002Fh2\u003E\r\n  \u003Cp\u003E\r\n    Court proceedings are broadly divided into two categories. Criminal cases — such as theft or assault — typically begin in the Magistrates’ Court, which resolves over 95% of cases. More serious offenses are transferred to the Crown Court, where a judge oversees proceedings and a jury of 12 members of the public determines guilt or innocence.\r\n\r\n    Civil cases, involving disputes between individuals or organizations, are generally heard in the County Court.\r\n\r\n  \u003C\u002Fp\u003E\r\n\r\n\u003C\u002Fdiv\u003E",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "GM2",
      "width": "m"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "html",
          "content": "\u003Cdiv style=\"max-width: 700px; margin: 0 auto; text-align: left; font-family: Times New Roman, sans-serif; line-height: 1.6;\"\u003E\r\n  \r\n  \u003Ch2\u003E Fact 3 \u003C\u002Fh2\u003E\r\n  \u003Cp\u003E\r\n    When a defendant is found guilty, the court must determine an appropriate sentence based on the seriousness of the offense and the circumstances of the case. Sentencing options may include fines for less serious offenses, community-based penalties such as unpaid work, or imprisonment in the most serious cases.\r\n\r\n    Judicial decisions can be challenged through the appeals system, but only where valid legal grounds exist. Appeals are reviewed by a higher court to assess whether the original decision involved a legal error.\r\n\r\n    At its core, the justice system is designed to ensure that every case receives a fair and lawful hearing.\r\n\r\n  \u003C\u002Fp\u003E\r\n\r\n\u003C\u002Fdiv\u003E",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "GM3"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "html",
          "content": "\u003Cdiv style=\"max-width: 700px; margin: 0 auto; text-align: left; font-family: Times New Roman, sans-serif; line-height: 1.6;\"\u003E\r\n  \r\n  \u003Ch2\u003E Fact 4 \u003C\u002Fh2\u003E\r\n  \u003Cp\u003E\r\n    Delays and human error remain persistent challenges in many legal systems. However, studies from courts that have implemented AI report significant improvements. These systems analyse historical case data to predict outcomes, estimate trial length, and automatically extract relevant information from legal documents. On average, trial duration was reduced by 40% compared with traditional procedures. \r\n  \u003C\u002Fp\u003E\r\n\r\n\u003C\u002Fdiv\u003E",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "ECM1"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "html",
          "content": "\u003Cdiv style=\"max-width: 700px; margin: 0 auto; text-align: left; font-family: Times New Roman, sans-serif; line-height: 1.6;\"\u003E\r\n  \r\n  \u003Ch2\u003E Fact 5 \u003C\u002Fh2\u003E\r\n  \u003Cp\u003E\r\n    Delays in court decisions often lead to higher costs, longer waiting times, and increased pressure on legal systems. AI-assisted systems help address these challenges by organizing evidence, supporting trial procedures, and automatically drafting legal documents. Studies have shown that these systems are associated with a 23% reduction in publication delays and an 8% faster transition from case filing to final judgment. In practice, this means that decisions become available sooner for the individuals and institutions that depend on them.\r\n  \u003C\u002Fp\u003E\r\n\r\n\u003C\u002Fdiv\u003E",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "ECM2"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "html",
          "content": "\u003Cdiv style=\"max-width: 700px; margin: 0 auto; text-align: left; font-family: Times New Roman, sans-serif; line-height: 1.6;\"\u003E\r\n  \r\n  \u003Ch2\u003E Fact 6 \u003C\u002Fh2\u003E\r\n  \u003Cp\u003E\r\n    Courts today face growing caseloads while available resources remain limited. Across different legal systems, AI tools are increasingly being introduced to support the distribution of cases and workloads. According to the European Commission for the Efficiency of Justice, these systems can help allocate resources more efficiently and contribute to more timely case resolution.\r\n    Legal professionals working with such systems frequently report improvements in workflow coordination.\r\n  \u003C\u002Fp\u003E\r\n\r\n\u003C\u002Fdiv\u003E",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "ECM3"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "Questions"
        },
        {
          "required": true,
          "type": "likert",
          "items": [
            {
              "label": "Juries make accurate decisions most of the time.",
              "coding": "JA1"
            },
            {
              "label": "Juries often base decisions on their prejudices instead of facts.",
              "coding": "JA2"
            },
            {
              "label": "Juries often lack the intelligence to make reasonable decisions.",
              "coding": "JA3"
            },
            {
              "label": "Juries make fair decisions most of the time",
              "coding": "JA4"
            },
            {
              "label": "A lot of judges make poor decisions",
              "coding": "JA5"
            },
            {
              "label": "Judges tend to let bias and prejudice affect their decisions",
              "coding": "JA6"
            },
            {
              "label": "Judges are easily ‘‘bought off’’ by corrupt politicians",
              "coding": "JA7"
            },
            {
              "label": "Judges usually make fair decisions",
              "coding": "JA8"
            },
            {
              "label": "Punishment in this country is basically ineffective",
              "coding": "JA9"
            },
            {
              "label": "Minorities are often given unfair punishments",
              "coding": "JA10"
            },
            {
              "label": "Our current system of punishment is effective at preventing crime",
              "coding": "JA11"
            },
            {
              "label": "The punishment given usually fits the crime",
              "coding": "JA12"
            }
          ],
          "width": "5",
          "anchors": [
            "Strongly Disagree",
            "Disagree",
            "Neutral",
            "Agree",
            "Strongly Agree"
          ],
          "label": "Indicate to what extent you agree with the following statements:",
          "name": "JAS"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Judicial Attitude Scale",
      "width": "l"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "Questions",
          "content": ""
        },
        {
          "required": true,
          "type": "likert",
          "items": [
            {
              "label": "In my opinion, using AI would enhance the effectiveness of courts.",
              "coding": "PU1"
            },
            {
              "label": "An AI agent would reduce costs in many routine legal jobs.",
              "coding": "PU2"
            },
            {
              "label": "An AI agent would save time in many routine legal jobs.",
              "coding": "PU3"
            },
            {
              "label": "I think that using AI would increase the courts' productivity.",
              "coding": "PU4"
            },
            {
              "label": "The use of AI tools in courtroom decision-making ensures that all parties are treated equally.",
              "coding": "FE1"
            },
            {
              "label": "I think that AI would help us to make fair decisions in legal processes.",
              "coding": "FE2"
            },
            {
              "label": "AI-assisted decisions uphold fairness to the same extent as traditional judicial decisions.",
              "coding": "FE3"
            },
            {
              "label": "I expect that court processes involving AI will uphold ethical and moral standards.",
              "coding": "FE4"
            },
            {
              "label": "I can trust AI in the judiciary.",
              "coding": "TR1"
            },
            {
              "label": "I expect AI in the judiciary to be reliable.",
              "coding": "TR2"
            },
            {
              "label": "I am confident in AI being used in the judiciary.",
              "coding": "TR3"
            },
            {
              "label": "I expect AI in the judiciary to be dependable.",
              "coding": "TR4"
            },
            {
              "label": "I want AI to assist legal professionals in their work.",
              "coding": "ACC1"
            },
            {
              "label": "I look forward to the implementation of legal AI in courts.",
              "coding": "ACC2"
            },
            {
              "label": "I would prefer a judge to consult an AI system rather than a human advisor.",
              "coding": "ACC3"
            },
            {
              "label": "I would rather choose a court that uses AI than one without it.",
              "coding": "ACC4"
            },
            {
              "label": "I would rather avoid going to a court that uses AI-based technologies.",
              "coding": "RES1"
            },
            {
              "label": "I prefer courts that do not feature AI.",
              "coding": "RES2"
            },
            {
              "label": "I would not support courts that feature AI.",
              "coding": "RES3"
            },
            {
              "label": "The integration of AI in legal practices is exciting.",
              "coding": "PA1"
            },
            {
              "label": "I feel comfortable when I think about future uses of AI in legal contexts",
              "coding": "PA2"
            },
            {
              "label": "When I think about AI being used in the courtroom, I mostly feel positive.",
              "coding": "PA3"
            },
            {
              "label": "I shiver with discomfort when I think about future uses of AI in the judiciary.",
              "coding": "NA1"
            },
            {
              "label": "I have strong negative emotions about the use of AI in courtrooms",
              "coding": "NA2"
            },
            {
              "label": "I am afraid of the use of AI in the courtroom.",
              "coding": "NA3"
            }
          ],
          "width": "5",
          "anchors": [
            "Strongly disagree",
            "Disagree",
            "Neutral",
            "Agree",
            "Strongly agree"
          ],
          "label": "Indicate to what extent you agree with the following statements:",
          "name": "JAIS"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Judicial AI Attitude Scale",
      "width": "l"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "Demographics",
          "content": ""
        },
        {
          "required": true,
          "type": "radio",
          "label": "What is your age?",
          "options": [
            {
              "label": "18-24",
              "coding": "18-24"
            },
            {
              "label": "25-34",
              "coding": "25-34"
            },
            {
              "label": "35-44",
              "coding": "35-44"
            },
            {
              "label": "45-54",
              "coding": "45-54"
            },
            {
              "label": "55-64",
              "coding": "55-64"
            },
            {
              "label": "65+",
              "coding": "65+"
            }
          ],
          "name": "what-is-your-age"
        },
        {
          "required": true,
          "type": "radio",
          "label": "What is your gender?",
          "options": [
            {
              "label": "Female",
              "coding": "Female"
            },
            {
              "label": "Male",
              "coding": "Male"
            },
            {
              "label": "Other",
              "coding": "Other"
            },
            {
              "label": "Prefer not to say",
              "coding": "Prefer not to say"
            }
          ],
          "name": "what-is-your-gender"
        },
        {
          "required": true,
          "type": "radio",
          "label": "What is the highest level of education you have completed?",
          "options": [
            {
              "label": "Less than high school",
              "coding": "Less than high school"
            },
            {
              "label": "High school",
              "coding": "High school"
            },
            {
              "label": "Associate degree",
              "coding": "Associate degree"
            },
            {
              "label": "Bachelor's degree",
              "coding": "Bachelor's degree"
            },
            {
              "label": "Master's degree",
              "coding": "Master's degree"
            },
            {
              "label": "Doctorate",
              "coding": "Doctorate"
            }
          ],
          "name": "what-is-the-highest-level-of-education-you-have-completed"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Demographics",
      "width": "l"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "Attention check"
        },
        {
          "required": true,
          "type": "textarea",
          "label": "What are the three core principles of the judiciary?",
          "name": "what-are-the-three-core-principles-of-the-judiciary"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Attention check",
      "width": "l"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "content": "",
          "title": "Thank you for participating!"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Thank you"
    },
    {
      "type": "lab.html.Screen",
      "files": {},
      "parameters": {
        "message": "Transferring data",
        "subtitle": "Please wait a second…"
      },
      "responses": {
        "": ""
      },
      "messageHandlers": {
        "run": function anonymous(
) {
const transmitPlugins = this.parents[0].plugins.plugins
  .filter(p => p instanceof lab.plugins.Transmit)

if (transmitPlugins.length > 0) {
  // If a transmitPlugin is available,
  // pull out its options and transfer the data
  const ds = this.options.datastore
  const tp = transmitPlugins[0]
  ds.transmit(
    tp.url,
    { ...tp.metadata, payload: 'full' },
    { headers: tp.headers, encoding: tp.encoding },
  ).then(
    () => this.end('transmission successful')
  ).catch(
    () => this.end('transmission failed')
  )
} else if ('jatos' in window) {
  // If JATOS is available, send data there
  jatos.submitResultData(
    this.options.datastore.exportJson(),
    () => this.end('transmission successful'),
    () => this.end('transmission failed')
  )
} else {
  this.end('no compatible backend')
}
}
      },
      "title": "Data transmission (beta)",
      "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n  \u003Cdiv\u003E\n    \u003Cimg src=\"lib\u002Floading.svg\"\u003E\n    \u003Cp\u003E\n      \u003Cspan class=\"font-weight-bold\"\u003E\n        ${ this.parameters.message }\n      \u003C\u002Fspan\u003E\u003Cbr\u003E\n      \u003Cspan class=\"text-muted\"\u003E\n        ${ this.parameters.subtitle }\n      \u003C\u002Fspan\u003E\n    \u003C\u002Fp\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E",
      "notes": "This template transmits the study data to a compatible server-side backend. Currently, it supports the PHP, Open Lab and JATOS backends.\n\nIt will wait until the data is transferred, showing a waiting screen with the text defined below, and continue with the remainder of the study after the transmission is complete. Please note that this screen will be skipped if no compatible backend is available."
    }
  ]
})

// Let's go!
study.run()