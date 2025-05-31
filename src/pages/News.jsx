import NewsCard from '../components/NewsCard';

function News() {
  const newsItems = [
    {
      title: "TGA Updates Guidance on Nicotine Vaping Product Prescribing",
      date: "June 15, 2023",
      summary: "The Therapeutic Goods Administration has released updated guidance for healthcare professionals on prescribing nicotine vaping products. The new guidance provides clarification on the SAS Category C notification process and includes additional resources for patient assessment.",
      source: "Therapeutic Goods Administration",
      link: "https://www.tga.gov.au",
    },
    {
      title: "New Research: Effectiveness of Nicotine Vaping Products for Smoking Cessation",
      date: "May 22, 2023",
      summary: "A new systematic review and meta-analysis published in the Medical Journal of Australia has examined the effectiveness of nicotine vaping products for smoking cessation. The study found that nicotine vaping products, when combined with behavioral support, increased the likelihood of successful smoking cessation compared to nicotine replacement therapy alone.",
      source: "Medical Journal of Australia",
      link: "https://www.mja.com.au",
    },
    {
      title: "RACGP Updates Position Statement on Vaping",
      date: "April 10, 2023",
      summary: "The Royal Australian College of General Practitioners (RACGP) has updated its position statement on vaping. The statement acknowledges the role of nicotine vaping products as a potential second-line therapy for smoking cessation while emphasizing the importance of first trying approved smoking cessation medications and the need for ongoing research into long-term safety.",
      source: "Royal Australian College of General Practitioners",
      link: "https://www.racgp.org.au",
    },
    {
      title: "Government Announces Increased Enforcement of Nicotine Vaping Regulations",
      date: "March 5, 2023",
      summary: "The Australian Government has announced increased enforcement measures to address the illegal importation and supply of nicotine vaping products. The measures include additional resources for Border Force and the TGA to detect and prevent illegal imports, as well as increased penalties for non-compliance with prescription requirements.",
      source: "Department of Health and Aged Care",
      link: "https://www.health.gov.au",
    },
    {
      title: "Pharmacy Guild Releases Guidance on Dispensing Nicotine Vaping Products",
      date: "February 18, 2023",
      summary: "The Pharmacy Guild of Australia has released comprehensive guidance for pharmacists on dispensing nicotine vaping products. The guidance covers prescription verification, product selection, patient counseling, and record-keeping requirements. It also addresses common scenarios pharmacists may encounter when dispensing these products.",
      source: "Pharmacy Guild of Australia",
      link: "https://www.guild.org.au",
    },
    {
      title: "Study Examines Patterns of Nicotine Vaping Product Use in Australian Adults",
      date: "January 30, 2023",
      summary: "A new study published in the journal Addiction has examined patterns of nicotine vaping product use among Australian adults following the prescription-only model implementation. The study found that while overall use remained relatively stable, there was an increase in users obtaining products with a prescription and a decrease in illegal procurement.",
      source: "Journal of Addiction",
      link: "https://onlinelibrary.wiley.com/journal/13600443",
    },
    {
      title: "TGA Approves New Nicotine Vaping Product for Prescription Access",
      date: "December 12, 2022",
      summary: "The Therapeutic Goods Administration has approved a new nicotine vaping product for prescription access under the Special Access Scheme and Authorised Prescriber pathways. The product, which comes in various nicotine concentrations, has been evaluated for quality and consistency, providing healthcare professionals with an additional option for patients.",
      source: "Therapeutic Goods Administration",
      link: "https://www.tga.gov.au",
    },
    {
      title: "National Health Survey Reveals Smoking and Vaping Trends",
      date: "November 5, 2022",
      summary: "The latest National Health Survey data shows a continued decline in smoking rates among Australian adults, with 11.2% reporting daily smoking, down from 12.8% in the previous survey. The data also indicates that 4.2% of adults reported using nicotine vaping products, with the majority being current or former smokers.",
      source: "Australian Bureau of Statistics",
      link: "https://www.abs.gov.au",
    },
  ];
  
  return (
    <div className="py-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">News & Updates</h1>
        <p className="mt-2 text-gray-600">
          Stay informed about the latest TGA announcements, regulatory changes, and research related to nicotine vaping products.
        </p>
      </div>
      
      <div className="space-y-4">
        {newsItems.map((item, index) => (
          <NewsCard
            key={index}
            title={item.title}
            date={item.date}
            summary={item.summary}
            source={item.source}
            link={item.link}
          />
        ))}
      </div>
      
      <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-md">
        <h3 className="text-sm font-medium text-blue-800">Disclaimer</h3>
        <p className="mt-1 text-sm text-blue-700">
          The news and updates provided here are for informational purposes only. Healthcare professionals should always refer to the official TGA website and other authoritative sources for the most current and accurate information regarding nicotine vaping product regulations.
        </p>
      </div>
    </div>
  );
}

export default News;
