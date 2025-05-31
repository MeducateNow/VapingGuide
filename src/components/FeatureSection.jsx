import { FiGitBranch, FiBook, FiFileText, FiHelpCircle, FiBell } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function FeatureSection() {
  const features = [
    {
      name: 'Interactive Decision Tree',
      description: 'Navigate through a step-by-step decision tree to determine the appropriate prescribing pathway based on patient characteristics and prescriber status.',
      icon: FiGitBranch,
      to: '/decision-tree',
    },
    {
      name: 'Comprehensive Resources',
      description: 'Access detailed information on the legal framework, prescribing process, patient assessment, and monitoring guidelines.',
      icon: FiBook,
      to: '/resources',
    },
    {
      name: 'Downloadable Templates',
      description: 'Download ready-to-use templates for patient information leaflets, informed consent forms, and quick reference guides.',
      icon: FiFileText,
      to: '/templates',
    },
    {
      name: 'Common Scenarios & FAQ',
      description: 'Find answers to frequently asked questions and guidance for handling common prescribing scenarios and challenges.',
      icon: FiHelpCircle,
      to: '/faq',
    },
    {
      name: 'News & Updates',
      description: 'Stay informed about the latest TGA announcements, regulatory changes, and research related to nicotine vaping products.',
      icon: FiBell,
      to: '/news',
    },
  ];

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to navigate nicotine vape prescribing
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our comprehensive tools and resources help Australian healthcare professionals confidently prescribe nicotine vaping products within TGA regulations.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <Link key={feature.name} to={feature.to} className="group">
                <div className="relative border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white group-hover:bg-primary-600 transition-colors duration-300">
                      <feature.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
                </div>
              </Link>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

export default FeatureSection;
