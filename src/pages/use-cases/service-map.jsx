import React from 'react';

import FeatureSection from 'components/pages/use-cases/feature-section';
import Hero from 'components/pages/use-cases/hero';
import JoinUsCard from 'components/pages/use-cases/join-us-cards';
import UseCaseCard from 'components/pages/use-cases/use-case-card';
import SEO from 'components/shared/seo';
import AscendLogo from 'icons/logo-ascend.inline.svg';
import CapitalOneLogo from 'icons/logo-capitalone.inline.svg';
import Wso2Logo from 'icons/wso2.inline.svg';
import KubernetesBee from 'images/pages/usecase/k8s-bee.png';
import ServiceMapImage1 from 'images/pages/usecase/servicemap-1.png';
import MainLayout from 'layouts/main/main';

const heroContent = {
  title: 'Service Map',
  category: 'Observability',
  tagline: 'Detailed visibility into the communication and behavior of your workloads',
  subHeading:
    'How can I gain detailed visibility into the communication and behavior of my workloads?',
  description:
    'When troubleshooting cloud native environments, the issue could be lurking between any layer of the network, environment, or its dependencies. For instance, it may be difficult to determine if DNS is working properly, or if an application is failing due to policy-related issues. Identifying the latest policy-related drops or determining if essential traffic between service components is being blocked can also prove to be challenging. On the other hand, examining logs for answers can be a difficult and time-consuming process.',
  imageSrc: KubernetesBee,
  imageAlt: 'Kubernetes Bee',
  imageWidth: 452,
  imageHeight: 350,
};

const sectionContent1 = {
  title: 'Hubble - eBPF powered Network, Service, and Security Observability for Kubernetes',
  description:
    'Hubble provides a range of monitoring capabilities, including service dependencies and communication maps, network monitoring, application monitoring, and security observability. By relying on eBPF, all visibility is programmable and allows for a dynamic approach that minimizes overhead while providing deep and detailed visibility.',
  videoSrc: 'https://www.youtube.com/embed/8WCbGSCyDSo',
};

const sectionContent2 = {
  title: 'Service Dependency Graph',
  description:
    'Simply looking at `kubectl get pods` does not indicate dependencies between each service or external APIs or databases. Hubble offers effortless automatic discovery of service dependencies within Kubernetes Clusters at L3/L4 and L7 levels. This allows for user-friendly visualization and filtering of dataflows as a Service Map, enabling easy management of service dependencies.  ',
  imageSrc: ServiceMapImage1,
  imageWidth: 624,
  imageHeight: 280,
  imageAlt: 'multi-cluster illustration',
};

const testimonials = [
  {
    logo: CapitalOneLogo,
    title: 'Building a Secure and Maintainable PaaS',
    CTAs: [
      {
        CTAtext: 'Watch The Talk',
        url: 'https://www.youtube.com/watch?v=hwOpCKBaJ-w',
      },
    ],
    description:
      'Capital One leverages Cilium in its internal PaaS to provide network visibility for teams in a multi-tenant Kubernetes cluster  “We do hundreds of deployments per day and we have clusters that have thousands of pods. This stack has allowed to provide less friction to more teams while using modern technology to meet our security and regulatory requirements.”',
    quote: true,
    person: 'Bradley Whitfield - Platform Engineer, Capital One',
  },
  {
    title: 'Saving Cost and Accelerating Insights with Hubble',
    logo: AscendLogo,
    CTAs: [
      {
        CTAtext: 'Read The Blog Post',
        url: 'https://clickhouse.com/blog/building-clickhouse-cloud-from-scratch-in-a-year',
      },
    ],
    description:
      'Trying to understand what’s going on with traditional tooling means, you probably throw three engineers at the problem for five hours while with Hubble you know what’s happening in about three seconds. It was one of those very easy trade offs to explain to my CEO. We’re going to encounter the cost of debugging, let’s make it a lot less expensive.',
    quote: true,
    person: 'Joe Stevens - Member of the Technical Staff, Ascend',
  },
  {
    title: 'Providing Observability to Customers With Hubble',
    logo: Wso2Logo,
    CTAs: [
      {
        CTAtext: 'Read The Case Study',
        url: 'https://www.cncf.io/case-studies/wso2/',
      },
    ],
    description: `"We use Hubble in two scenarios. One is to provide an observability view to our customers, which we call our cell-based observability view. They can come to our Choreo dashboard and view their observable data like error count, request count, latency and the different HTTP status codes. All this data is captured from Hubble relay, which we collect and store in Azure ADX and then visualize. Second, if a customer has some performance issues, we directly use the Hubble CLI to look at the Layer 3 packets to see where things are failing and what optimization we can do. Ultimately, we use Hubble CLI and its observability data to optimize our network traffic, find out issues, and resolve them."`,
    quote: true,
    person: 'Lakmal Warusawithana, Senior Director - Cloud Architecture, WSO2',
  },
];

const ServiceMapPage = () => (
  <MainLayout theme="gray">
    <Hero {...heroContent} />
    <FeatureSection {...sectionContent1} />
    <FeatureSection {...sectionContent2} />
    <UseCaseCard heading="Who’s using Cilium’s Hubble?" testimonials={testimonials} />
    <JoinUsCard />
  </MainLayout>
);

export default ServiceMapPage;

// eslint-disable-next-line react/prop-types
export const Head = ({ location: { pathname } }) => {
  const pageMetadata = {
    title: heroContent.title,
    description: heroContent.tagline,
    slug: pathname,
  };
  return <SEO data={pageMetadata} />;
};
