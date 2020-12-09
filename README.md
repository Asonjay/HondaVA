# Honda Virtual Assistant

Team Member:
- Author: Jason Xu, Jiankai Xu, Jeremy Lin
- Sponsor: Amol Govindwar
- Instructor: Dr. Rajiv Ramnath

## Introduction

Honda R&D Americas LLC supports the design and development of new products for Honda Globally. As part of the IT group in R&D, we provide IT infrastructure, services to users. We can see that Self Service is increasing in the industry and with more remote work we want to enable the self-service with the virtual assistant. This new product will enable us to use new technology to better serve the customer. 

We have many knowledge bases, however, to get to the user at the right time is difficult and time-consuming. With Virtual assistant, users can get real time feedback and get the answer to their question which is mostly in the knowledge base. The Virtual assistant will improve the self-service capability and reduce the burden on existing support staff. So that they can focus on more value-added work. 

![Image of introduction](https://github.com/Asonjay/HondaVA/blob/main/documentation/Introduction.png)

This project will explore implementing a virtual assistant on `Microsoft Team` or `Skype` platform, to help automate common internal tasks and reduce ticket loads. It includes three parts:

- Research bot framework on the market
- Analyzing bot framework and making recommendation for Honda
- Exploring customization of bot framework

## Bot Framework Analysis

We researched 6 bot framework on the market: `Azure Bot Framework`, `Amazon Lex`, `Pandorabot`, `IBM Watson`, `Botpress`, and `Google Dialogflow`. Analysis of bot framework is based on the factors below:

- Quality: Knowledge and SLA
- Development: Development Cost, maintenance cost, and complexity
- Adaptability: Requirements
- Environment: Support Teams/Skype and language Support

![image of bot framework analysis]()
After our decision making process, our recommendation for honda is to build the system based on **Azure Bot Framework**

## Bot Framework Customization

This customization has been created using [Bot Framework](https://dev.botframework.com), it shows how to:

- Use [LUIS](https://www.luis.ai) to implement core AI capabilities
- Handle user interruptions for such things as `Search for` or `Find`
- Use [Azure Cognitive Search](https://azure.microsoft.com/en-us/services/search/) to retrieve requested knowledge base file
- Format the response using [Adaptive Cards](https://adaptivecards.io/)

## System Architecture

![Image of system architecture](https://github.com/Asonjay/HondaVA/blob/main/documentation/System%20Architecture.png)
Our system cooperates `Microsoft Teams`, `Azure Bot Framework`, `LUIS`, and `Azure Cognitive Search`. We divided system into 5 subsystems:

- Login System
- Bot Framework
- Routine Task Identifier
- Notification & Email Handler
- Incident Reporter

## Project Assets

Under `documentation` folder, there are documentations for this project.

- `Honda VA - Bot Framework Analysis`: Analysis of 6 bot framework on the market, including comparison and decision making report
- `Honda VA - Project Workbook`: Workbook including software engineering process, requirements and analysis, architecture, project planning, and project handoff
- `Honda VA - Setup Instruction`: Instruction of replicating the process of how to rebuild our system

## Acknowledgements

This bot framework is inspired by BotBuilder-Samples [13.core-bot](https://github.com/microsoft/BotBuilder-Samples/tree/main/samples/csharp_dotnetcore/13.core-bot)

Special thanks to **Dr. Rajiv Ramnath** for guiding us to finish this project. Plus, thanks to **Amol Govindwar** to initiate this project and provide us with all his experiences and knowledge.
