import React, { useState, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";

// =========================================================
// PROJECT DATA
// =========================================================

const projects = [
  {
    id: 1,
    title: "GB Land Reform",
    description:
      "The GB Land Reform Data Collection and Spatial Analysis in Gilgit 2021 project was carried out by Web Collection Technology Private Limited, led by its CEO Sadaqat Ali. The initiative was conducted under the supervision of DS Soni at the Jawari Center for Public Policies to support evidence-based land reform planning.",
    image:
      "https://framerusercontent.com/images/sPBMYWlrLtEBuhJIu1Bkz9TUN4c.png",
    badges: [
      "GIS based Data Collection",
      "Spatial Analysis",
      "Ortho mozaking",
    ],
  },
  {
    id: 2,
    title: "3D Modelling Using Drone Imagery for Urban Planning",
    description:
      "This project involved creating a high-resolution 3D land model using drone imagery for urban planning purposes. It was executed by Web Collection Technology under the supervision of local government authorities.",
    image:
      "https://framerusercontent.com/images/qYlZ1n3uAqXRhiOPVfli4GisaA.png",
    badges: ["Agisoft Metashape", "Pix4D", "DJI Modify"],
  },
  {
    id: 3,
    title:
      "Web Mapping & Land Categorization with Grid-Based Demarcation",
    description:
      "This project involved creating an interactive web map to categorize land parcels using point-based demarcation. A precise grid system aligned with the North-South pole was applied for accurate land division and visualization.",
    image:
      "https://framerusercontent.com/images/qJRrqt6I0kUZlRP91PlApvyFCs.png",
    badges: ["Google Earth Online", "ArcGIS Online", "Web GIS"],
  },
  {
    id: 4,
    title:
      "Negative Slope Analysis & Terrain Visualization Using DEM Data and GIS Tools",
    description:
      "This project focuses on identifying and visualizing negative slopes using high-resolution DEM data and GIS tools. ArcGIS was used for terrain analysis, while Google Earth Pro provided intuitive visual outputs for broader understanding.",
    image: "./4box.png",
    badges: ["ArcGIS", "Google Earth Pro", "High-resolution DEM Data"],
  },

  // =======================================================
  // PROJECT 5
  // =======================================================

  {
    id: 5,
    title: "Abbottabad Soapstone Mining & Geological Survey",
    description:
      "A detailed geological and spatial assessment of soapstone mining areas in Sherwan, Abbottabad, covering geological mapping, mine survey, GPS data collection, UAV mapping, mineral sampling, mine documentation, and GIS-based spatial analysis.",
    image: "./soapstone1.png",
    badges: [
      "Geological Survey",
      "Mine Mapping",
      "UAV Mapping",
      "GIS Analysis",
    ],
  },

  // =======================================================
  // PROJECT 6
  // =======================================================

  {
    id: 6,
    title: "Zamrud (Emerald) Survey — Daskin, Astore",
    description:
      "A preliminary geological reconnaissance and spatial survey of a reported emerald occurrence in Daskin, Astore, combining GPS mapping, field sampling, geological documentation, remote sensing, and GIS analysis.",
    image: "./emerald.png",
    badges: [
      "Mineral Exploration",
      "GPS Mapping",
      "Field Sampling",
      "GIS Analysis",
    ],
  },
];

const featureImages = [
  "nm.png",
  "n2.png",
  "n3.png",
  "n4.png",
  "n5.png",
];

// =========================================================
// COMMON BACKGROUND
// =========================================================

const FuturisticBackground = () => {
  const sprinkles = Array.from({ length: 38 });

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="absolute top-1/4 -right-40 w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-3xl" />

      <div className="absolute bottom-0 left-1/3 w-[450px] h-[450px] rounded-full bg-cyan-400/5 blur-3xl" />

      {sprinkles.map((_, index) => (
        <motion.span
          key={index}
          className="absolute w-1 h-1 rounded-full bg-cyan-300/50 shadow-[0_0_10px_rgba(34,211,238,0.8)]"
          initial={{
            x: `${Math.random() * 100}%`,
            y: `${Math.random() * 100}%`,
            opacity: 0.2,
          }}
          animate={{
            y: [
              `${Math.random() * 100}%`,
              `${Math.random() * 100}%`,
              `${Math.random() * 100}%`,
            ],
            opacity: [0.15, 0.7, 0.15],
          }}
          transition={{
            duration: 5 + Math.random() * 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 3,
          }}
        />
      ))}
    </div>
  );
};

// =========================================================
// INFO BOX
// =========================================================

const InfoBox = ({ title, value }) => (
  <motion.div
    whileHover={{
      y: -4,
      boxShadow: "0 0 25px rgba(34,211,238,0.12)",
    }}
    className="
      bg-[#07111f]/90
      border border-cyan-400/20
      hover:border-cyan-400/50
      p-4
      rounded-2xl
      text-sm
      transition-all
      duration-300
      backdrop-blur-sm
    "
  >
    <p className="text-cyan-400/80 font-semibold mb-1">{title}</p>
    <p className="text-white font-medium leading-relaxed">{value}</p>
  </motion.div>
);

// =========================================================
// COMMON BUTTON
// =========================================================

const BackButton = ({ onBack }) => (
  <motion.button
    whileHover={{
      scale: 1.04,
      boxShadow: "0 0 30px rgba(34,211,238,0.35)",
    }}
    whileTap={{ scale: 0.98 }}
    onClick={onBack}
    className="
      text-black
      bg-gradient-to-r
      from-cyan-400
      via-sky-400
      to-blue-500
      hover:from-white
      hover:via-cyan-100
      hover:to-white
      mb-10
      cursor-pointer
      font-bold
      px-6
      py-3
      text-lg
      rounded-full
      transition-all
      duration-300
      shadow-[0_0_18px_rgba(34,211,238,0.18)]
    "
  >
    All Projects
  </motion.button>
);

// =========================================================
// BREADCRUMB
// =========================================================

const Breadcrumb = () => (
  <div className="flex flex-wrap items-center gap-2 text-gray-400 text-sm mb-5">
    <a href="../" className="transition-colors hover:text-cyan-400">
      Home
    </a>

    <span className="text-gray-600">/</span>

    <a
      href="../projects"
      className="cursor-pointer transition-colors hover:text-cyan-400"
    >
      Portfolio
    </a>

    <span className="text-gray-600">/</span>

    <span className="text-cyan-400">Portfolio Single</span>
  </div>
);

// =========================================================
// SECTION HEADING
// =========================================================

const DetailHeading = ({ children }) => (
  <h3
    className="
      text-2xl
      md:text-3xl
      font-bold
      mb-4
      bg-gradient-to-r
      from-white
      via-cyan-300
      to-blue-400
      bg-clip-text
      text-transparent
    "
  >
    {children}
  </h3>
);

// =========================================================
// PROJECT 1
// =========================================================

const GBLandReform = ({ onBack }) => {
  return (
    <section className="relative text-white px-2 md:px-0">
      <div className="max-w-6xl mx-auto relative z-10">
        <BackButton onBack={onBack} />

        <Breadcrumb />

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="
            text-4xl
            md:text-5xl
            font-bold
            mb-6
            leading-tight
            bg-gradient-to-r
            from-white
            via-cyan-300
            to-blue-500
            bg-clip-text
            text-transparent
          "
        >
          GB LAND REFORM
        </motion.h1>

        <p className="text-gray-400 max-w-4xl mb-16 leading-relaxed">
          The "GB Land Reform Data Collection and Spatial Analysis in Gilgit
          2021" project was carried out by Web Collection Technology Private
          Limited, led by its CEO Sadaqat Ali. The initiative was conducted
          under the supervision of DS Soni at the Jawari Center for Public
          Policies to support evidence-based land reform planning.
        </p>

        <div className="grid md:grid-cols-4 gap-6 mb-20">
          <InfoBox
            title="Client"
            value="Soni Jawari Center for Public Policy, Gilgit"
          />

          <InfoBox
            title="Industry"
            value="Web Collection Technology Private Limited"
          />

          <InfoBox title="Timeline" value="13 Weeks" />

          <InfoBox
            title="Technologies"
            value="GIS, Drone Survey, Google Imagery, Remote Sensing"
          />
        </div>

        <div
          className="
            rounded-3xl
            overflow-hidden
            border
            border-cyan-400/20
            shadow-[0_0_40px_rgba(34,211,238,0.08)]
            mb-24
          "
        >
          <img
            src="https://framerusercontent.com/images/sPBMYWlrLtEBuhJIu1Bkz9TUN4c.png"
            alt="GB Land Reform"
            className="w-full block"
          />
        </div>

        <section className="mb-20">
          <DetailHeading>Project Overview</DetailHeading>

          <p className="text-gray-300 leading-8">
            GB Land Reform Data Collection and Spatial Analysis in Gilgit –
            2021
          </p>

          <p className="text-gray-300 leading-8 mt-4">
            This project aimed to collect, organize, and spatially analyze
            land-related data in the Gilgit region to support ongoing land
            reform initiatives. Conducted in 2021 by Web Collection Technology
            Private Limited under the leadership of CEO Sadaqat Ali, the
            project focused on integrating Geographic Information Systems
            (GIS) with field-collected data to provide accurate insights into
            land ownership, usage patterns, encroachments, and disputed areas.
          </p>

          <p className="text-gray-300 leading-8 mt-4">
            Supervised by DS Soni at the Jawari Center for Public Policies, the
            initiative contributed to evidence-based policymaking by producing
            detailed spatial maps and reports. The project outcomes serve as a
            foundation for transparent decision-making, improved land
            governance, and sustainable development in Gilgit-Baltistan.
          </p>
        </section>

        <section className="mb-20">
          <DetailHeading>Your Role</DetailHeading>

          <ul className="list-disc pl-6 space-y-3 text-gray-300 leading-7">
            <li>
              Sadaqat Ali, serving as the Project Lead and GIS Specialist,
              oversaw the full planning and execution process — including data
              design, field coordination, spatial analysis, and stakeholder
              engagement.
              <br />
              <br />
              The core project team from Web Collection Technology played the
              following roles:
            </li>

            <li>
              GIS Analysts conducted mapping, digitization, and spatial
              modeling.
            </li>

            <li>
              Survey & Data Collection Team carried out field surveys, community
              interviews, and digitized local land records.
            </li>

            <li>
              Data Entry & Management Unit processed tabular data and maintained
              database integrity.
            </li>

            <li>
              Technical Support Team ensured the smooth functioning of GIS
              software, data tools, and equipment.
            </li>
          </ul>

          <div className="mt-16">
            <DetailHeading>GIS Stack Used</DetailHeading>

            <ul className="list-disc pl-6 space-y-3 text-gray-300 leading-7">
              <li>
                ArcGIS Pro – For advanced spatial analysis, cartography, and
                data visualization.
              </li>

              <li>
                QGIS – As an open-source alternative for quick map editing,
                digitization, and plugin-based analysis.
              </li>

              <li>
                ArcGIS Online – For data sharing, web mapping, and stakeholder
                collaboration through interactive dashboards.
              </li>

              <li>
                Survey123 for ArcGIS – Used for structured field data
                collection via mobile devices with geotagged entries.
              </li>

              <li>
                Google Earth Pro – For historical imagery review, visual
                validation, and georeferencing support.
              </li>

              <li>
                PostgreSQL/PostGIS – For spatial database management and storage
                of georeferenced land records.
              </li>

              <li>
                Python (with ArcPy/QGIS APIs) – For automation of geoprocessing
                tasks and report generation.
              </li>

              <li>
                Excel & Power BI – For attribute data handling, tabular
                analysis, and basic charting.
              </li>
            </ul>
          </div>

          <div className="mt-16">
            <DetailHeading>Key Features</DetailHeading>

            <h4 className="text-xl md:text-2xl font-semibold mb-6 text-cyan-300">
              High-Resolution Spatial Mapping
            </h4>

            <p className="text-gray-300 leading-7 mb-6">
              Digitized and georeferenced land parcels with precise boundary
              delineation for accurate spatial analysis.
            </p>

            <ul className="list-disc pl-6 space-y-4 text-gray-300 leading-7">
              <li>
                <strong className="text-white">
                  Field-Based Data Collection
                </strong>
                <br />
                Integrated Survey123 and GPS-enabled devices for real-time,
                location-specific land data and ownership records.
              </li>

              <li>
                <strong className="text-white">
                  Identification of Disputed and Encroached Land
                </strong>
                <br />
                Mapped conflict zones and unauthorized land use areas to support
                legal and administrative actions.
              </li>

              <li>
                <strong className="text-white">
                  Integration of Spatial and Non-Spatial Data
                </strong>
                <br />
                Combined geographic features with land ownership, usage, and
                legal status data for comprehensive insights.
              </li>

              <li>
                <strong className="text-white">
                  Stakeholder Collaboration
                </strong>
                <br />
                Worked closely with local government bodies, policy centers, and
                community members for data validation and transparency.
              </li>

              <li>
                <strong className="text-white">
                  Interactive Thematic Maps
                </strong>
                <br />
                Produced multi-layered thematic maps highlighting land use
                patterns, ownership categories, and reform zones.
              </li>

              <li>
                <strong className="text-white">
                  Spatial Database Development
                </strong>
                <br />
                Created a structured spatial database using PostgreSQL/PostGIS
                for long-term land records management.
              </li>

              <li>
                <strong className="text-white">
                  Automated Reporting Tools
                </strong>
                <br />
                Used Python scripting for generating customized analytical
                reports and visual summaries for decision-makers.
              </li>
            </ul>
          </div>

          <div
            className="
              font-black
              text-cyan-300
              min-h-10
              bg-gradient-to-r
              from-cyan-400/10
              to-blue-500/10
              border
              border-cyan-400/20
              rounded-2xl
              mt-12
              mb-12
              p-3
            "
          >
            Mapping Ortho Mosaicking
          </div>

          <DetailHeading>Challenges & Solutions</DetailHeading>

          <div className="space-y-4 text-gray-300 leading-7">
            <p>
              <strong className="text-white">
                Challenge 1: Incomplete or Outdated Land Records
              </strong>
              <br />
              Solution: Conducted detailed field surveys and interviews with
              local landowners and community elders to validate and update
              records, ensuring data accuracy and completeness.
            </p>

            <p>
              <strong className="text-white">
                Challenge 2: Difficult Terrain and Accessibility
              </strong>
              <br />
              Solution: Utilized high-resolution satellite imagery, drone-based
              reconnaissance (where possible), and mobile GIS tools to map
              remote or inaccessible areas effectively.
            </p>

            <p>
              <strong className="text-white">
                Challenge 3: Lack of Standardized Data Formats
              </strong>
              <br />
              Solution: Developed a unified data entry and classification
              system integrated with GIS databases to maintain consistency
              across all datasets.
            </p>

            <p>
              <strong className="text-white">
                Challenge 4: Disputed and Overlapping Land Claims
              </strong>
              <br />
              Solution: Mapped disputed zones separately with metadata tags and
              incorporated local stakeholder inputs to flag sensitive areas for
              further legal or administrative review.
            </p>

            <p>
              <strong className="text-white">
                Challenge 5: Limited Technical Capacity of Local Institutions
              </strong>
              <br />
              Solution: Provided technical training sessions on GIS tools and
              spatial data interpretation to local officials and collaborators
              for future use and maintenance.
            </p>

            <p>
              <strong className="text-white">
                Challenge 6: Data Privacy and Community Trust
              </strong>
              <br />
              Solution: Ensured ethical data collection through informed
              consent and maintained confidentiality, which helped build trust
              and cooperation during fieldwork.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6 mt-12">
            {featureImages.map((img, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="
                  h-32
                  rounded-2xl
                  overflow-hidden
                  border
                  border-cyan-400/20
                  bg-[#07111f]
                  shadow-[0_0_20px_rgba(34,211,238,0.05)]
                "
              >
                <img
                  src={img}
                  alt={`Feature ${i + 1}`}
                  className="w-full h-full object-contain"
                />
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-24">
          <DetailHeading>Output</DetailHeading>

          <p className="text-gray-300 leading-8">
            The GB Land Reform Data Collection and Spatial Analysis in Gilgit
            2021 project successfully produced detailed spatial datasets,
            interactive land maps, and a centralized digital land database.
            These outputs support transparent land reforms, reduce disputes,
            and enable evidence-based policymaking. The project has laid the
            groundwork for future digital governance in Gilgit-Baltistan.
          </p>
        </section>

        <MoreProjects />
      </div>
    </section>
  );
};

// =========================================================
// PROJECT 2
// =========================================================

const Drone3DProject = ({ onBack }) => (
  <div className="max-w-6xl mx-auto relative z-10">
    <main className="relative text-white">
      <BackButton onBack={onBack} />

      <section className="relative">
        <div className="relative z-10 max-w-6xl mx-auto p-2 md:p-6">
          <Breadcrumb />

          <div className="mb-8">
            <h1
              className="
                text-3xl
                md:text-4xl
                font-bold
                mb-4
                leading-tight
                bg-gradient-to-r
                from-white
                via-cyan-300
                to-blue-400
                bg-clip-text
                text-transparent
              "
            >
              3D MODELLING USING DRONE IMAGERY FOR URBAN PLANNING
            </h1>

            <p className="text-gray-400 max-w-2xl leading-7">
              This project involved creating a high-resolution 3D land model
              using drone imagery for urban planning purposes. It was executed
              by Web Collection Technology under the supervision of local
              government authorities.
            </p>
          </div>

          <a
            href="https://www.linkedin.com/posts/sadaqat-aly-24aa9918a_assistantabrcommissioner-gis-smartcity-activity-7201641969368862724-V7NO"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-block
              bg-gradient-to-r
              from-cyan-400
              via-sky-400
              to-blue-500
              text-black
              font-semibold
              px-6
              py-3
              rounded-full
              mb-10
              shadow-[0_0_22px_rgba(34,211,238,0.18)]
              hover:shadow-[0_0_35px_rgba(34,211,238,0.35)]
              transition-all
              duration-300
            "
          >
            Live Preview
          </a>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-sm mb-10">
            <div>
              <p className="text-cyan-400 font-semibold mb-1">Client</p>
              <p className="text-gray-300">Assistant Collector</p>
            </div>

            <div>
              <p className="text-cyan-400 font-semibold mb-1">Industry</p>
              <p className="text-gray-300">Local Government Authorities</p>
            </div>

            <div>
              <p className="text-cyan-400 font-semibold mb-1">Timeline</p>
              <p className="text-gray-300">4 Weeks</p>
            </div>

            <div>
              <p className="text-cyan-400 font-semibold mb-1">
                Technologies
              </p>
              <p className="text-gray-300">DJI Mavic 3 Drone</p>
            </div>
          </div>

          <div
            className="
              w-full
              h-[300px]
              md:h-[500px]
              mb-12
              relative
              rounded-3xl
              overflow-hidden
              border
              border-cyan-400/20
              shadow-[0_0_40px_rgba(34,211,238,0.08)]
            "
          >
            <img
              src="https://framerusercontent.com/images/qYlZ1n3uAqXRhiOPVfli4GisaA.png"
              alt="3D Drone Mapping"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto p-2 md:p-6 space-y-12">
        <div>
          <DetailHeading>Project Overview</DetailHeading>

          <p className="text-gray-300 leading-8">
            The 3D Land Modeling for Urban Planning project aimed to support
            local government planning efforts by generating accurate,
            high-resolution 3D models using drone imagery. Conducted by Web
            Collection Technology under the supervision of the Assistant and
            Deputy Collector, the project provided detailed spatial data and
            visualizations essential for effective land use planning, zoning,
            and infrastructure development. The month-long initiative included
            drone-based data acquisition, photogrammetric processing, and
            GIS-based analysis to produce orthomosaic maps, elevation models,
            and planning-ready outputs.
          </p>
        </div>

        <div>
          <DetailHeading>Your Role</DetailHeading>

          <ul className="list-disc list-inside space-y-3 text-gray-300 leading-7">
            <li>
              As the CEO of Web Collection Technology, I served as the Project
              Manager and certified Drone Operator for this project. I led the
              overall planning, supervised drone flight operations, managed the
              technical team, and ensured accurate data acquisition and 3D
              model generation. I also coordinated directly with local
              government officials, ensuring the project met all requirements
              under the supervision of the Assistant and Deputy Collector. My
              role was central to maintaining quality, timelines, and delivering
              actionable outputs for urban planning.
            </li>
          </ul>
        </div>

        <div>
          <DetailHeading>Tech Stack Used</DetailHeading>

          <ul className="list-disc list-inside space-y-3 text-gray-300 leading-7">
            <li>
              <strong className="text-white">Drone Technology:</strong> DJI
              Phantom 4 Pro (or equivalent) for high-resolution aerial imagery
              acquisition.
            </li>

            <li>
              <strong className="text-white">
                Photogrammetry Software:
              </strong>{" "}
              Agisoft Metashape / Pix4D for processing drone images into 3D
              models, orthomosaics, and point clouds.
            </li>

            <li>
              <strong className="text-white">GIS Tools:</strong> ArcGIS Pro and
              QGIS for spatial analysis, terrain modeling, and map generation.
            </li>

            <li>
              <strong className="text-white">
                3D Modeling Software:
              </strong>{" "}
              Blender and SketchUp for refining 3D visualizations and urban
              planning simulations.
            </li>

            <li>
              <strong className="text-white">Data Management:</strong> GeoTIFF,
              LAS/LAZ, and shapefile formats for storing and sharing spatial
              data.
            </li>

            <li>
              <strong className="text-white">Coordinate System:</strong> WGS
              84 / UTM Zone for georeferencing and spatial accuracy.
            </li>
          </ul>
        </div>

        <div>
          <DetailHeading>Key Features</DetailHeading>

          <ul className="list-disc list-inside space-y-4 text-gray-300 leading-7">
            <li>
              📸 <strong className="text-white">High-Resolution Drone Imagery:</strong>{" "}
              Accurate aerial data captured for detailed analysis and modeling.
            </li>

            <li>
              🌐 <strong className="text-white">3D Terrain and Surface Modeling:</strong>{" "}
              Realistic digital models for visualizing land elevation and
              structure.
            </li>

            <li>
              🗺️ <strong className="text-white">Orthomosaic and Topographic Maps:</strong>{" "}
              Geo-referenced maps to support urban planning and documentation.
            </li>

            <li>
              📊 <strong className="text-white">Slope and Elevation Analysis:</strong>{" "}
              Critical for identifying suitable zones for infrastructure and
              construction.
            </li>

            <li>
              🏙️ <strong className="text-white">Urban Planning Visualizations:</strong>{" "}
              3D outputs to aid planners and decision-makers in land use
              planning.
            </li>

            <li>
              ⚙️ <strong className="text-white">GIS-Based Spatial Analysis:</strong>{" "}
              Advanced geospatial tools used for accurate area, distance, and
              zoning assessments.
            </li>

            <li>
              📁 <strong className="text-white">Deliverable Formats:</strong>{" "}
              Models and maps delivered in industry-standard formats for easy
              integration into planning workflows.
            </li>
          </ul>
        </div>

        <div>
          <h1
            className="
              text-2xl
              font-bold
              mb-5
              bg-gradient-to-r
              from-white
              via-cyan-300
              to-blue-400
              bg-clip-text
              text-transparent
            "
          >
            Structure Overview
          </h1>

          <div
            className="
              bg-[#050d19]
              font-bold
              text-cyan-300
              p-6
              rounded-2xl
              font-mono
              text-sm
              leading-relaxed
              overflow-x-auto
              border
              border-cyan-400/20
              shadow-[0_0_30px_rgba(34,211,238,0.06)]
            "
          >
            <pre>{`3D modelling /src
├── main.js
├── app/
│   ├── App.js
│   └── Config.js
├── engine/
│   ├── SceneManager.js
│   ├── Renderer.js
│   ├── CameraManager.js
│   └── Controls.js`}</pre>
          </div>
        </div>

        <div>
          <DetailHeading>Challenges & Solutions</DetailHeading>

          <ul className="list-disc list-inside space-y-4 text-gray-300 leading-7">
            <li>
              <strong className="text-white">Challenge:</strong> Unpredictable
              Weather Conditions
              <br />
              <strong className="text-white">Solution:</strong> Flight
              operations were scheduled during clear weather windows, and
              multiple flights were conducted to ensure complete and clear data
              capture.
            </li>

            <li>
              <strong className="text-white">Challenge:</strong> Rugged and
              Uneven Terrain
              <br />
              <strong className="text-white">Solution:</strong> Ground Control
              Points (GCPs) were strategically placed to improve
              georeferencing accuracy in challenging areas.
            </li>

            <li>
              <strong className="text-white">Challenge:</strong> Large Volume
              of Data Processing
              <br />
              <strong className="text-white">Solution:</strong> High-performance
              computing systems and optimized workflows in Agisoft Metashape
              were used to speed up processing and reduce errors.
            </li>

            <li>
              <strong className="text-white">Challenge:</strong> Coordination
              with Local Authorities
              <br />
              <strong className="text-white">Solution:</strong> Regular
              briefings and on-site meetings were conducted with the Assistant
              and Deputy Collector to ensure smooth execution and compliance.
            </li>

            <li>
              <strong className="text-white">Challenge:</strong> Ensuring
              Spatial Accuracy
              <br />
              <strong className="text-white">Solution:</strong> Used
              high-precision GNSS devices for GCP collection and maintained
              rigorous QA/QC during GIS analysis.
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {[
            "https://framerusercontent.com/images/uVwnFJaxLCCqdF9GiziPGfJ8.jpeg",
            "https://framerusercontent.com/images/z8f1ScsNVazSnyuTHO3ZEaIQJfk.jpeg",
            "https://framerusercontent.com/images/zWxWcr4q7Nm8nYqamkVLkQ0sFJg.jpeg",
            "https://framerusercontent.com/images/66GRP0KERbYgnyvn176scqJGv8k.png",
            "https://framerusercontent.com/images/ZupHRImArbKijPG9AzgfoMawT9w.png",
          ].map((src, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="
                relative
                w-full
                h-64
                md:h-80
                rounded-2xl
                overflow-hidden
                border
                border-cyan-400/20
              "
            >
              <img
                src={src}
                alt={`Project image ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto p-2 md:p-6 mt-16">
        <DetailHeading>Client Satisfaction</DetailHeading>

        <ul className="list-disc list-inside space-y-4 text-gray-300 leading-7">
          <li>
            <strong className="text-white">Challenge:</strong> Unpredictable
            Weather Conditions
            <br />
            <strong className="text-white">Solution:</strong> Flight operations
            were scheduled during clear weather windows.
          </li>

          <li>
            <strong className="text-white">Challenge:</strong> Rugged and
            Uneven Terrain
            <br />
            <strong className="text-white">Solution:</strong> Ground Control
            Points were strategically placed to improve georeferencing
            accuracy.
          </li>

          <li>
            <strong className="text-white">Challenge:</strong> Large Volume of
            Data Processing
            <br />
            <strong className="text-white">Solution:</strong> Optimized
            photogrammetry workflows were used to process the data efficiently.
          </li>

          <li>
            <strong className="text-white">Challenge:</strong> Coordination
            with Local Authorities
            <br />
            <strong className="text-white">Solution:</strong> Regular briefings
            and on-site meetings were conducted.
          </li>
        </ul>
      </section>

      <MoreProjects />
    </main>
  </div>
);

// =========================================================
// PROJECT 3
// =========================================================

const WebMappingProject = ({ onBack }) => (
  <div className="max-w-6xl mx-auto relative z-10">
    <main className="relative text-white">
      <BackButton onBack={onBack} />

      <section className="relative">
        <div className="relative z-10 max-w-6xl mx-auto p-2 md:p-6">
          <Breadcrumb />

          <div className="mb-8">
            <h1
              className="
                text-3xl
                md:text-4xl
                font-bold
                mb-4
                leading-tight
                bg-gradient-to-r
                from-white
                via-cyan-300
                to-blue-400
                bg-clip-text
                text-transparent
              "
            >
              WEB MAPPING & LAND CATEGORIZATION WITH GRID-BASED DEMARCATION
            </h1>

            <p className="text-gray-400 max-w-2xl leading-7">
              This project involved creating an interactive web map to
              categorize land parcels using point-based demarcation. A precise
              grid system aligned with the North-South pole was applied for
              accurate land division and visualization.
            </p>
          </div>

          <a
            href="https://framerusercontent.com/images/qJRrqt6I0kUZlRP91PlApvyFCs.png"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-block
              bg-gradient-to-r
              from-cyan-400
              via-sky-400
              to-blue-500
              text-black
              font-semibold
              px-6
              py-3
              rounded-full
              mb-10
              shadow-[0_0_22px_rgba(34,211,238,0.18)]
              hover:shadow-[0_0_35px_rgba(34,211,238,0.35)]
              transition-all
              duration-300
            "
          >
            Live Preview
          </a>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-sm mb-10">
            <div>
              <p className="text-cyan-400 font-semibold mb-1">Client</p>
              <p className="text-gray-300">Barney Joy</p>
            </div>

            <div>
              <p className="text-cyan-400 font-semibold mb-1">Industry</p>
              <p className="text-gray-300">Land and Infrastructure</p>
            </div>

            <div>
              <p className="text-cyan-400 font-semibold mb-1">Timeline</p>
              <p className="text-gray-300">2 Weeks</p>
            </div>

            <div>
              <p className="text-cyan-400 font-semibold mb-1">
                Technologies
              </p>
              <p className="text-gray-300">
                Web GIS, GIS and Remote Sensing
              </p>
            </div>
          </div>

          <div
            className="
              w-full
              h-[300px]
              md:h-[500px]
              mb-12
              relative
              rounded-3xl
              overflow-hidden
              border
              border-cyan-400/20
              shadow-[0_0_40px_rgba(34,211,238,0.08)]
            "
          >
            <img
              src="THREE.png"
              alt="Web Mapping"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto p-2 md:p-6 space-y-12">
        <div>
          <DetailHeading>Project Overview</DetailHeading>

          <p className="text-gray-300 leading-8">
            This project focused on developing an interactive web map for land
            categorization and visualization using client-provided point
            demarcations. Each land parcel was digitized and systematically
            divided using a grid aligned with the North-South pole for spatial
            accuracy. The map allows users to view, navigate, and analyze land
            categories efficiently. The project was executed using professional
            GIS tools and web mapping libraries to ensure accuracy,
            responsiveness, and usability for land assessment and planning
            purposes.
          </p>
        </div>

        <div>
          <DetailHeading>Your Role</DetailHeading>

          <ul className="list-disc list-inside space-y-3 text-gray-300 leading-7">
            <li>
              As the GIS expert and web mapping developer, I was responsible
              for the entire workflow—from interpreting the client’s point data
              to delivering a fully functional web map. I digitized land
              parcels, applied a precise North-South aligned grid system,
              categorized land types, and built an interactive map interface.
              I ensured spatial accuracy, clean design, and user-friendly
              navigation while maintaining clear communication with the client
              throughout the project.
            </li>
          </ul>
        </div>

        <div>
          <DetailHeading>Tech Stack Used</DetailHeading>

          <ul className="list-disc list-inside space-y-3 text-gray-300 leading-7">
            <li>
              <strong className="text-white">ArcGIS Pro:</strong> For advanced
              geoprocessing, coordinate alignment, and map layout design.
            </li>

            <li>
              <strong className="text-white">Leaflet.js:</strong> Lightweight
              JavaScript library for building the interactive web map.
            </li>

            <li>
              <strong className="text-white">Mapbox:</strong> For customized
              basemaps and smooth tile rendering.
            </li>

            <li>
              <strong className="text-white">GeoJSON & Shapefiles:</strong> For
              spatial data storage, sharing, and integration.
            </li>

            <li>
              <strong className="text-white">
                HTML/CSS/JavaScript:
              </strong>{" "}
              To structure, style, and power the web mapping interface.
            </li>

            <li>
              <strong className="text-white">Coordinate System:</strong> WGS 84
              (EPSG:4326) for global alignment.
            </li>
          </ul>
        </div>

        <div>
          <DetailHeading>Key Features</DetailHeading>

          <h3 className="text-xl mb-4 text-cyan-300">
            Point-Based Land Demarcation: Accurate digitization of
            client-provided points to define land parcel boundaries.
          </h3>

          <ul className="list-disc list-inside space-y-4 text-gray-300 leading-7">
            <li>
              🗺️{" "}
              <strong className="text-white">
                North-South Aligned Grid System:
              </strong>{" "}
              Grid overlay aligned with Earth's poles for consistent spatial
              orientation.
            </li>

            <li>
              🌐{" "}
              <strong className="text-white">Interactive Web Map:</strong>{" "}
              User-friendly, browser-accessible map for easy viewing and
              navigation.
            </li>

            <li>
              🗺️{" "}
              <strong className="text-white">
                Orthomosaic and Topographic Maps:
              </strong>{" "}
              Geo-referenced maps to support planning and documentation.
            </li>

            <li>
              🏷️{" "}
              <strong className="text-white">Land Categorization:</strong>{" "}
              Visual representation of land parcels by type or use.
            </li>

            <li>
              🔍{" "}
              <strong className="text-white">Zoom & Pan Controls:</strong>{" "}
              Smooth navigation for detailed exploration of specific land
              areas.
            </li>

            <li>
              📂{" "}
              <strong className="text-white">Data Integration:</strong>{" "}
              Support for GeoJSON and shapefile formats.
            </li>

            <li>
              💡{" "}
              <strong className="text-white">Responsive Design:</strong>{" "}
              Optimized for desktop and mobile viewing.
            </li>
          </ul>
        </div>

        <div>
          <h1
            className="
              text-2xl
              font-bold
              mb-5
              bg-gradient-to-r
              from-white
              via-cyan-300
              to-blue-400
              bg-clip-text
              text-transparent
            "
          >
            Code Structure Overview
          </h1>

          <div
            className="
              bg-[#050d19]
              font-bold
              text-cyan-300
              p-6
              rounded-2xl
              font-mono
              text-sm
              leading-relaxed
              overflow-x-auto
              border
              border-cyan-400/20
              shadow-[0_0_30px_rgba(34,211,238,0.06)]
            "
          >
            <pre>{`web-mapping-project/
│
├── index.html
├── style.css
├── script.js
├── data/
│   ├── parcels.geojson
│   └── grid.geojson
├── assets/
│   └── icons, logos, etc.
└── libs/
    └── leaflet.js, leaflet.css`}</pre>
          </div>
        </div>

        <div>
          <DetailHeading>Challenges & Solutions</DetailHeading>

          <ul className="list-disc list-inside space-y-4 text-gray-300 leading-7">
            <li>
              <strong className="text-white">
                Challenge: Irregular Point Demarcation
              </strong>
              <br />
              <strong className="text-white">Solution:</strong> Cleaned and
              validated input point data in QGIS.
            </li>

            <li>
              <strong className="text-white">
                Challenge: Aligning Grid with North-South Pole
              </strong>
              <br />
              <strong className="text-white">Solution:</strong> Used WGS 84
              coordinate reference system and automated grid generation tools.
            </li>

            <li>
              <strong className="text-white">
                Challenge: Performance Issues with Web Map Rendering
              </strong>
              <br />
              <strong className="text-white">Solution:</strong> Optimized
              GeoJSON files by simplifying geometries.
            </li>

            <li>
              <strong className="text-white">
                Challenge: Category Visualization Confusion
              </strong>
              <br />
              <strong className="text-white">Solution:</strong> Implemented
              clear color coding and popup labels.
            </li>

            <li>
              <strong className="text-white">
                Challenge: Cross-Browser Compatibility
              </strong>
              <br />
              <strong className="text-white">Solution:</strong> Tested the web
              map on Chrome, Firefox, and Edge.
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {["p1.png", "p2.png", "p3.png", "p3.png"].map((src, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="
                relative
                w-full
                h-72
                md:h-80
                rounded-2xl
                overflow-hidden
                border
                border-cyan-400/20
              "
            >
              <img
                src={src}
                alt={`Project image ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto p-2 md:p-6 mt-16 mb-24">
        <DetailHeading>Takeaways</DetailHeading>

        <p className="text-gray-300 leading-8">
          "Outstanding work! Sadaqat delivered exactly what I needed – a clean,
          interactive web map with accurate land parcel demarcation and a
          well-aligned grid system. His communication was clear, the delivery
          was on time, and the technical quality exceeded my expectations."
        </p>
      </section>

      <MoreProjects />
    </main>
  </div>
);

// =========================================================
// PROJECT 4
// =========================================================

const NegativeSlopeProject = ({ onBack }) => (
  <div className="max-w-6xl mx-auto relative z-10">
    <main className="relative text-white">
      <BackButton onBack={onBack} />

      <section className="relative">
        <div className="relative z-10 max-w-6xl mx-auto p-2 md:p-6">
          <Breadcrumb />

          <div className="mb-8">
            <h1
              className="
                text-3xl
                md:text-4xl
                font-bold
                mb-4
                leading-tight
                bg-gradient-to-r
                from-white
                via-cyan-300
                to-blue-400
                bg-clip-text
                text-transparent
              "
            >
              Negative Slope Analysis and Terrain Visualization Using DEM Data
              and GIS Tools
            </h1>

            <p className="text-gray-400 max-w-2xl leading-7">
              This project focuses on identifying and visualizing negative
              slopes using high-resolution DEM data and GIS tools. ArcGIS was
              used for terrain analysis, while Google Earth Pro provided
              intuitive visual outputs for broader understanding.
            </p>
          </div>

          <a
            href="https://framerusercontent.com/images/qJRrqt6I0kUZlRP91PlApvyFCs.png"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-block
              bg-gradient-to-r
              from-cyan-400
              via-sky-400
              to-blue-500
              text-black
              font-semibold
              px-6
              py-3
              rounded-full
              mb-10
              shadow-[0_0_22px_rgba(34,211,238,0.18)]
              hover:shadow-[0_0_35px_rgba(34,211,238,0.35)]
              transition-all
              duration-300
            "
          >
            Live Preview
          </a>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-sm mb-10">
            <div>
              <p className="text-cyan-400 font-semibold mb-1">Client</p>
              <p className="text-gray-300">APrilbonifatto</p>
            </div>

            <div>
              <p className="text-cyan-400 font-semibold mb-1">Industry</p>
              <p className="text-gray-300">Fiverr</p>
            </div>

            <div>
              <p className="text-cyan-400 font-semibold mb-1">Timeline</p>
              <p className="text-gray-300">1 Week</p>
            </div>

            <div>
              <p className="text-cyan-400 font-semibold mb-1">
                Technologies
              </p>
              <p className="text-gray-300">GIS and Remote Sensing</p>
            </div>
          </div>

          <div
            className="
              w-full
              h-[300px]
              md:h-[500px]
              mb-12
              relative
              rounded-3xl
              overflow-hidden
              border
              border-cyan-400/20
              shadow-[0_0_40px_rgba(34,211,238,0.08)]
            "
          >
            <img
              src="./4box.png"
              alt="Negative Slope Analysis"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto p-2 md:p-6 space-y-12">
        <div>
          <DetailHeading>Project Overview</DetailHeading>

          <p className="text-gray-300 leading-8">
            This project focuses on analyzing terrain elevation and identifying
            negative slopes using high-resolution Digital Elevation Model (DEM)
            data. The methodology involves processing spatial data in ArcGIS to
            calculate slope values, isolating areas with downward gradients,
            and organizing the results in Excel for clarity. The processed data
            is then visualized in Google Earth Pro, overlaying slope and
            elevation values on satellite imagery for intuitive understanding.
            The final outputs are exported as high-resolution maps to support
            terrain interpretation, drainage analysis, and land-use planning.
          </p>
        </div>

        <div>
          <DetailHeading>Your Role</DetailHeading>

          <ul className="list-disc list-inside space-y-3 text-gray-300 leading-7">
            <li>
              As the GIS Analyst and Project Lead, I was responsible for the
              complete execution of this project—from DEM data processing to
              final visualization. I conducted detailed terrain and slope
              analysis in ArcGIS, focusing on identifying negative slopes. I
              organized and filtered the data in Excel for clarity and extracted
              meaningful patterns. Finally, I visualized the results in Google
              Earth Pro and produced high-quality map outputs.
            </li>
          </ul>
        </div>

        <div>
          <DetailHeading>Tech Stack Used</DetailHeading>

          <ul className="list-disc list-inside space-y-3 text-gray-300 leading-7">
            <li>
              <strong className="text-white">ArcGIS Pro:</strong> For DEM
              processing, slope calculation, terrain analysis, and spatial data
              management.
            </li>

            <li>
              <strong className="text-white">Google Earth Pro:</strong> For
              overlaying slope data on satellite imagery.
            </li>

            <li>
              <strong className="text-white">Microsoft Excel:</strong> For
              organizing, filtering, and highlighting slope values and
              elevation data.
            </li>

            <li>
              <strong className="text-white">
                High-Resolution DEM Data:
              </strong>{" "}
              Core input dataset for elevation and slope analysis.
            </li>

            <li>
              <strong className="text-white">WGS 84 (EPSG:4326):</strong>{" "}
              Coordinate reference system used for geospatial consistency.
            </li>

            <li>
              <strong className="text-white">
                KML/KMZ & GeoTIFF Formats:
              </strong>{" "}
              For data export and visualization.
            </li>
          </ul>
        </div>

        <div>
          <DetailHeading>Key Features</DetailHeading>

          <ul className="list-disc list-inside space-y-4 text-gray-300 leading-7">
            <li>
              <strong className="text-white">
                📍 Accurate Negative Slope Detection:
              </strong>{" "}
              Identified and analyzed terrain areas where elevation declines.
            </li>

            <li>
              <strong className="text-white">
                🌐 High-Resolution DEM Analysis:
              </strong>{" "}
              Used detailed elevation data for precise slope and terrain
              modeling.
            </li>

            <li>
              <strong className="text-white">
                🗺️ GIS-Based Terrain Mapping:
              </strong>{" "}
              Applied ArcGIS tools for elevation, slope, and feature extraction.
            </li>

            <li>
              <strong className="text-white">
                📊 Organized Slope Data in Excel:
              </strong>{" "}
              Filtered and categorized slope values for interpretation.
            </li>

            <li>
              <strong className="text-white">
                🛰️ Real-World Visualization:
              </strong>{" "}
              Mapped slope and elevation data over satellite imagery.
            </li>

            <li>
              <strong className="text-white">
                🖼️ High-Quality Map Outputs:
              </strong>{" "}
              Exported final annotated maps for reports and presentations.
            </li>

            <li>
              <strong className="text-white">
                🔄 Consistent Methodology:
              </strong>{" "}
              Followed a repeatable workflow for analysis.
            </li>
          </ul>
        </div>

        <div>
          <h1
            className="
              text-2xl
              font-bold
              mb-5
              bg-gradient-to-r
              from-white
              via-cyan-300
              to-blue-400
              bg-clip-text
              text-transparent
            "
          >
            Code Structure Overview
          </h1>

          <div
            className="
              bg-[#050d19]
              font-bold
              text-cyan-300
              p-6
              rounded-2xl
              font-mono
              text-sm
              leading-relaxed
              overflow-x-auto
              border
              border-cyan-400/20
            "
          >
            <pre>{`No Code`}</pre>
          </div>
        </div>

        <div>
          <DetailHeading>Challenges & Solutions</DetailHeading>

          <ul className="list-disc list-inside space-y-4 text-gray-300 leading-7">
            <li>
              <strong className="text-white">
                Challenge: Irregular Elevation Data or Noisy DEM
              </strong>
              <br />
              <strong className="text-white">Solution:</strong> Applied data
              smoothing and preprocessing techniques in ArcGIS.
            </li>

            <li>
              <strong className="text-white">
                Challenge: Difficulty in Isolating Negative Slopes
              </strong>
              <br />
              <strong className="text-white">Solution:</strong> Customized
              slope analysis parameters and conditional tools.
            </li>

            <li>
              <strong className="text-white">
                Challenge: Complex Data Interpretation
              </strong>
              <br />
              <strong className="text-white">Solution:</strong> Used Google
              Earth Pro with clear labels and visual cues.
            </li>

            <li>
              <strong className="text-white">
                Challenge: Large Data Handling
              </strong>
              <br />
              <strong className="text-white">Solution:</strong> Organized the
              dataset in Excel with filters and categories.
            </li>

            <li>
              <strong className="text-white">
                Challenge: Maintaining Geospatial Accuracy
              </strong>
              <br />
              <strong className="text-white">Solution:</strong> Used consistent
              coordinate systems and file formats.
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {["42.png", "43.png", "44.png", "45.png"].map((src, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="
                relative
                w-full
                h-72
                md:h-80
                rounded-2xl
                overflow-hidden
                border
                border-cyan-400/20
              "
            >
              <img
                src={src}
                alt={`Project image ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto p-2 md:p-6 mt-16 mb-24">
        <DetailHeading>Review</DetailHeading>

        <p className="text-gray-300 leading-8">
          "Excellent work! The analysis was detailed, accurate, and
          well-presented. Sadaqat demonstrated strong GIS expertise, especially
          in identifying and visualizing negative slopes. The final maps were
          easy to understand and perfectly suited for our planning needs."
        </p>
      </section>

      <MoreProjects />
    </main>
  </div>
);

// =========================================================
// PROJECT 5
// ABBOTTABAD SOAPSTONE MINING & GEOLOGICAL SURVEY
// =========================================================

const SoapstoneMiningProject = ({ onBack }) => {
  const soapstoneImages = [
    "./soapstone1.png",
    "./soapstone2.png",
    "./soapstone3.png",
  ];

  return (
    <div className="max-w-6xl mx-auto relative z-10">
      <main className="relative text-white">
        <BackButton onBack={onBack} />

        <section className="relative">
          <div className="relative z-10 max-w-6xl mx-auto p-2 md:p-6">
            <Breadcrumb />

            <div className="mb-10">
              <p className="text-cyan-400 font-semibold tracking-wider uppercase mb-3">
                Mineral Exploration & Mining Survey
              </p>

              <h1
                className="
                  text-3xl
                  md:text-5xl
                  font-bold
                  mb-5
                  leading-tight
                  bg-gradient-to-r
                  from-white
                  via-cyan-300
                  to-blue-400
                  bg-clip-text
                  text-transparent
                "
              >
                Abbottabad Soapstone Mining & Geological Survey
              </h1>

              <p className="text-cyan-300 text-lg mb-5">
                Geological Mapping | Mine Survey | UAV Mapping | Sampling |
                Mineral Assessment
              </p>

              <p className="text-gray-400 max-w-4xl leading-8">
                A detailed geological and spatial assessment of soapstone mining
                areas in Sherwan, Abbottabad, covering geological mapping, mine
                survey, GPS data collection, UAV mapping, mineral sampling,
                mine documentation, and GIS-based spatial analysis.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6 mb-14">
              <InfoBox
                title="Location"
                value="Sherwan, Abbottabad, Khyber Pakhtunkhwa, Pakistan"
              />

              <InfoBox
                title="Type"
                value="Mineral Exploration & Mining Survey"
              />

              <InfoBox title="Commodity" value="Soapstone / Talc" />

              <InfoBox
                title="Services"
                value="Geological Survey, GIS Mapping, GPS Survey, UAV Mapping, Sampling"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
              {soapstoneImages.map((src, index) => (
                <motion.div
                  key={src}
                  whileHover={{ y: -7, scale: 1.01 }}
                  className="
                    h-72
                    md:h-80
                    rounded-3xl
                    overflow-hidden
                    border
                    border-cyan-400/20
                    bg-[#07111f]
                    shadow-[0_0_35px_rgba(34,211,238,0.06)]
                  "
                >
                  <img
                    src={src}
                    alt={`Soapstone mining project image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto p-2 md:p-6 space-y-14">
          <div>
            <DetailHeading>Project Overview</DetailHeading>

            <p className="text-gray-300 leading-8">
              This project involved a detailed geological and spatial
              assessment of soapstone mining areas in Sherwan, Abbottabad. The
              work focused on documenting active and accessible mining areas,
              underground workings, mineralized zones, geological features,
              and the spatial distribution of soapstone occurrences.
            </p>

            <p className="text-gray-300 leading-8 mt-5">
              The Sherwan region is known for soapstone occurrences, with
              previous studies documenting soapstone within dolomitic rocks and
              in association with bedding and fracture zones. The project
              combined field geological investigation, GPS surveying, mineral
              sampling, mine documentation, GIS mapping, and spatial analysis.
            </p>
          </div>

          <div>
            <DetailHeading>Survey Areas & Mining Concessions</DetailHeading>

            <div className="grid md:grid-cols-2 gap-5">
              {[
                "Kandoka / Khandakhu",
                "Baskola",
                "Chelter / Chelethar",
                "Sherwan, Abbottabad",
              ].map((area) => (
                <InfoBox key={area} title="Survey Area" value={area} />
              ))}
            </div>

            <p className="text-gray-300 leading-8 mt-6">
              Approximately <strong className="text-cyan-300">24 underground
              tunnels/workings</strong> were documented along with surface
              observations, GPS locations, geological characteristics,
              mineralized zones, and sample points.
            </p>
          </div>

          <div>
            <DetailHeading>Field Geological Survey</DetailHeading>

            <ul className="list-disc list-inside space-y-4 text-gray-300 leading-8">
              <li>
                GPS locations of mine entrances and important geological
                features were recorded.
              </li>

              <li>
                Tunnel locations, orientations, accessibility, and visible
                underground conditions were documented.
              </li>

              <li>
                Visible soapstone mineralization and host-rock characteristics
                were recorded during field observations.
              </li>

              <li>
                Bedding, fractures, alteration, and other relevant geological
                features were documented.
              </li>

              <li>
                Representative mineral samples were collected for assessment.
              </li>

              <li>
                Mineral quality indicators and priority exploration areas were
                identified from project field observations.
              </li>

              <li>
                Field photography was used for technical documentation and
                spatial interpretation.
              </li>
            </ul>
          </div>

          <div>
            <DetailHeading>Mineral Quality Assessment</DetailHeading>

            <p className="text-gray-300 leading-8 mb-7">
              The project used the following project-specific classification
              for mineral quality assessment:
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <InfoBox title="HG — High Grade" value="More than 80%" />
              <InfoBox title="MG — Medium Grade" value="Approximately 60–80%" />
              <InfoBox title="Low Grade" value="Less than 60%" />
            </div>

            <p className="text-gray-300 leading-8 mb-6">
              Based on project sampling and field observations, <strong className="text-cyan-300">
              Baskola 10C</strong> was identified as a priority area.
            </p>

            <div className="overflow-x-auto rounded-2xl border border-cyan-400/20">
              <table className="w-full text-left border-collapse">
                <thead className="bg-cyan-400/10">
                  <tr>
                    <th className="p-4 text-cyan-300">Sample</th>
                    <th className="p-4 text-cyan-300">Classification</th>
                    <th className="p-4 text-cyan-300">Reported Result</th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="border-t border-cyan-400/10">
                    <td className="p-4 text-gray-300">C-T-5A</td>
                    <td className="p-4 text-gray-300">HG</td>
                    <td className="p-4 text-cyan-300 font-semibold">92%</td>
                  </tr>

                  <tr className="border-t border-cyan-400/10">
                    <td className="p-4 text-gray-300">C-T-7A</td>
                    <td className="p-4 text-gray-300">HG</td>
                    <td className="p-4 text-cyan-300 font-semibold">87%</td>
                  </tr>

                  <tr className="border-t border-cyan-400/10">
                    <td className="p-4 text-gray-300">T-11</td>
                    <td className="p-4 text-gray-300">MG</td>
                    <td className="p-4 text-cyan-300 font-semibold">84%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 p-5 rounded-2xl bg-blue-500/5 border border-blue-400/20">
              <p className="text-gray-300 leading-7">
                <strong className="text-white">Important:</strong> These
                figures represent project-specific sampling and assessment
                results and should not be interpreted as a district-wide
                reserve estimate.
              </p>
            </div>
          </div>

          <div>
            <DetailHeading>GIS Workflow</DetailHeading>

            <div className="grid md:grid-cols-7 gap-3">
              {[
                "Field Data",
                "GPS Survey",
                "Data Cleaning",
                "GIS Database",
                "Geological Mapping",
                "Spatial Analysis",
                "Mine Documentation",
              ].map((step, index) => (
                <motion.div
                  key={step}
                  whileHover={{ y: -4 }}
                  className="
                    p-4
                    rounded-2xl
                    text-center
                    bg-[#07111f]
                    border
                    border-cyan-400/20
                    hover:border-cyan-400/50
                    transition-all
                  "
                >
                  <div className="text-cyan-400 text-sm font-bold mb-2">
                    0{index + 1}
                  </div>

                  <p className="text-gray-300 text-sm leading-6">{step}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <DetailHeading>GIS Database & Spatial Documentation</DetailHeading>

            <p className="text-gray-300 leading-8">
              The GIS database integrates mine locations, tunnels and
              underground workings, sample locations, grade information,
              geological observations, access routes, surface features, and
              priority exploration areas into a structured spatial dataset.
            </p>

            <p className="text-gray-300 leading-8 mt-5">
              The spatial documentation can integrate terrain, mine entrances,
              underground workings, geological structures, mineralized zones,
              and access routes. This provides a foundation for future 3D mine
              modelling, resource evaluation, mine planning, and monitoring.
            </p>
          </div>

          <div>
            <DetailHeading>Key Findings</DetailHeading>

            <ul className="list-disc list-inside space-y-4 text-gray-300 leading-8">
              <li>
                Approximately <strong className="text-white">24
                tunnels/workings</strong> were documented.
              </li>

              <li>
                GPS-based mapping was carried out for mine entrances,
                geological features, and sample locations.
              </li>

              <li>
                Mineralized zones and geological characteristics were
                documented.
              </li>

              <li>
                Samples were classified into high, medium, and low-grade
                categories based on the project assessment.
              </li>

              <li>
                Selected high-grade locations were identified from the project
                sampling.
              </li>

              <li>
                Baskola 10C was identified as a priority area based on field
                observations and project sampling.
              </li>

              <li>
                GIS-based spatial visualization was used to organize and
                interpret the project dataset.
              </li>
            </ul>
          </div>

          <div>
            <DetailHeading>Deliverables</DetailHeading>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Geological field survey records",
                "GPS survey data",
                "Mine and tunnel database",
                "Mineral sample database",
                "Grade classification",
                "GIS maps",
                "Spatial analysis",
                "Mine documentation",
                "Priority-area identification",
                "Field photos and technical documentation",
              ].map((item) => (
                <div
                  key={item}
                  className="
                    p-4
                    rounded-2xl
                    bg-[#07111f]
                    border
                    border-cyan-400/20
                    text-gray-300
                    hover:border-cyan-400/50
                    transition-all
                  "
                >
                  <span className="text-cyan-400 mr-2">◆</span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div>
            <DetailHeading>Technology & Tools</DetailHeading>

            <div className="grid md:grid-cols-2 gap-6">
              <InfoBox
                title="GIS"
                value="ArcGIS / QGIS"
              />

              <InfoBox
                title="Survey"
                value="GPS / GNSS"
              />

              <InfoBox
                title="Remote Sensing"
                value="Satellite Imagery & UAV"
              />

              <InfoBox
                title="Analysis"
                value="Spatial Analysis & Geological Interpretation"
              />

              <InfoBox
                title="Data"
                value="Geospatial Database, Sample Data & Field Records"
              />

              <InfoBox
                title="Project Focus"
                value="Mineral Exploration • Geological Survey • Mine Mapping • GIS"
              />
            </div>
          </div>

          <div>
            <DetailHeading>Project Significance</DetailHeading>

            <p className="text-gray-300 leading-8">
              This project demonstrates the integration of geology, GIS, field
              surveying, GPS, UAV mapping, sampling, and spatial technologies
              for mineral resource documentation in mountainous terrain. The
              resulting dataset provides a foundation for further exploration,
              mine planning, resource assessment, monitoring, and future
              technical studies.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-gradient-to-r from-cyan-400/5 to-blue-500/5 border border-cyan-400/20">
            <DetailHeading>Project Focus</DetailHeading>

            <div className="flex flex-wrap gap-3">
              {[
                "Mineral Exploration",
                "Geological Survey",
                "Mine Mapping",
                "GIS",
                "UAV Mapping",
                "Spatial Analysis",
                "Soapstone Assessment",
                "Mining Documentation",
              ].map((item) => (
                <span
                  key={item}
                  className="
                    px-4
                    py-2
                    rounded-full
                    bg-cyan-400/10
                    border
                    border-cyan-400/20
                    text-cyan-300
                    text-sm
                  "
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <MoreProjects />
      </main>
    </div>
  );
};

// =========================================================
// PROJECT 6
// ZAMRUD / EMERALD SURVEY
// =========================================================

const EmeraldSurveyProject = ({ onBack }) => {
  return (
    <div className="max-w-6xl mx-auto relative z-10">
      <main className="relative text-white">
        <BackButton onBack={onBack} />

        <section className="relative">
          <div className="relative z-10 max-w-6xl mx-auto p-2 md:p-6">
            <Breadcrumb />

            <div className="mb-10">
              <p className="text-cyan-400 font-semibold tracking-wider uppercase mb-3">
                Gemstone Exploration & Geological Survey
              </p>

              <h1
                className="
                  text-3xl
                  md:text-5xl
                  font-bold
                  mb-5
                  leading-tight
                  bg-gradient-to-r
                  from-white
                  via-cyan-300
                  to-blue-400
                  bg-clip-text
                  text-transparent
                "
              >
                Zamrud (Emerald) Survey — Daskin, Astore
              </h1>

              <p className="text-cyan-300 text-lg mb-5">
                Mineral Exploration | Geological Survey | GPS Mapping | Field
                Sampling | GIS Analysis
              </p>

              <p className="text-gray-400 max-w-4xl leading-8">
                A preliminary geological reconnaissance and spatial survey of a
                reported emerald occurrence in Daskin, Astore, combining field
                geology, GPS mapping, mineral sampling, geological
                documentation, remote sensing, and GIS-based spatial analysis.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6 mb-14">
              <InfoBox
                title="Location"
                value="Daskin, Astore, Gilgit-Baltistan, Pakistan"
              />

              <InfoBox
                title="Type"
                value="Gemstone Exploration & Geological Survey"
              />

              <InfoBox
                title="Target Mineral"
                value="Zamrud (Emerald)"
              />

              <InfoBox
                title="Services"
                value="Geological Reconnaissance, GPS Survey, Sampling, GIS"
              />
            </div>

            <motion.div
              whileHover={{ y: -6 }}
              className="
                w-full
                h-[350px]
                md:h-[550px]
                rounded-3xl
                overflow-hidden
                border
                border-cyan-400/20
                bg-[#07111f]
                shadow-[0_0_40px_rgba(34,211,238,0.08)]
              "
            >
              <img
                src="./emerald.png"
                alt="Zamrud Emerald Survey Daskin Astore"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto p-2 md:p-6 space-y-14 mt-10">
          <div>
            <DetailHeading>Project Overview</DetailHeading>

            <p className="text-gray-300 leading-8">
              This project involved a preliminary investigation and
              documentation of a reported emerald occurrence in the mountainous
              Daskin area of Astore. The fieldwork combined geological
              reconnaissance, GPS positioning, mineral observation, sample
              collection, field photography, and GIS-based spatial
              documentation.
            </p>

            <p className="text-gray-300 leading-8 mt-5">
              The work was focused on documenting the reported green-colored
              mineral occurrence and its geological setting, while creating a
              structured spatial record that can support future geological and
              mineralogical investigations.
            </p>
          </div>

          <div>
            <DetailHeading>Field Geological Survey</DetailHeading>

            <ul className="list-disc list-inside space-y-4 text-gray-300 leading-8">
              <li>
                Green-colored mineral material was observed during field
                reconnaissance.
              </li>

              <li>
                The geological setting was documented as highly fractured.
              </li>

              <li>
                Visible mineralization and associated geological features were
                recorded.
              </li>

              <li>
                Associated copper traces were documented during field
                observations.
              </li>

              <li>
                Mica-related traces were also observed and documented.
              </li>

              <li>
                Representative samples were collected for further assessment.
              </li>

              <li>
                GPS positioning and field photography were used for spatial and
                technical documentation.
              </li>
            </ul>
          </div>

          <div>
            <DetailHeading>GPS Location</DetailHeading>

            <div
              className="
                p-6
                rounded-3xl
                bg-[#07111f]
                border
                border-cyan-400/20
                shadow-[0_0_30px_rgba(34,211,238,0.05)]
              "
            >
              <p className="text-cyan-400 font-semibold mb-3">
                Approximate Field Coordinate
              </p>

              <p className="text-2xl md:text-3xl font-bold text-white">
                35°30′51″N, 74°55′09″E
              </p>

              <p className="text-gray-400 mt-4 leading-7">
                The coordinate represents the approximate documented field
                location associated with the reported occurrence.
              </p>
            </div>
          </div>

          <div>
            <DetailHeading>Sample & Mineral Assessment</DetailHeading>

            <p className="text-gray-300 leading-8">
              Field appearance, green coloration, geological setting,
              fractures, associated mineral traces, and representative samples
              were documented during the reconnaissance.
            </p>

            <div className="mt-6 p-6 rounded-3xl bg-blue-500/5 border border-blue-400/20">
              <p className="text-gray-300 leading-8">
                <strong className="text-white">Important:</strong> Field
                identification alone cannot establish commercial grade or
                definitive emerald identity. Laboratory petrographic,
                mineralogical, XRD, XRF, or appropriate geochemical testing
                would be required for definitive mineral identification and
                quality assessment.
              </p>
            </div>
          </div>

          <div>
            <DetailHeading>GIS Spatial Data</DetailHeading>

            <p className="text-gray-300 leading-8 mb-6">
              The project data can be organized into a GIS-ready spatial
              database containing:
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Reported occurrence location",
                "GPS coordinates",
                "Sample points",
                "Geological observations",
                "Fracture and structural information",
                "Satellite imagery",
                "Digital Elevation Model (DEM)",
                "Terrain information",
                "Access routes",
                "Potential exploration zones",
              ].map((item) => (
                <div
                  key={item}
                  className="
                    p-4
                    rounded-2xl
                    bg-[#07111f]
                    border
                    border-cyan-400/20
                    text-gray-300
                    hover:border-cyan-400/50
                    transition-all
                  "
                >
                  <span className="text-cyan-400 mr-2">◆</span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div>
            <DetailHeading>Remote Sensing & Terrain Analysis</DetailHeading>

            <p className="text-gray-300 leading-8">
              The Astore region is characterized by mountainous terrain where
              GIS and remote sensing can help identify geological structures,
              rock exposures, lineaments, terrain characteristics, and
              potential exploration zones.
            </p>

            <p className="text-gray-300 leading-8 mt-5">
              Future UAV and satellite-based surveys can complement ground
              observations by providing additional high-resolution spatial
              information for geological interpretation and exploration
              planning.
            </p>
          </div>

          <div>
            <DetailHeading>Project Outcomes</DetailHeading>

            <ul className="list-disc list-inside space-y-4 text-gray-300 leading-8">
              <li>
                Preliminary emerald-focused geological reconnaissance was
                completed.
              </li>

              <li>
                The reported green mineral occurrence was documented.
              </li>

              <li>
                Approximate GPS coordinates were recorded.
              </li>

              <li>
                Geological fractures and associated mineral traces were
                documented.
              </li>

              <li>
                Representative samples were collected for further
                investigation.
              </li>

              <li>
                A GIS-ready spatial record was established.
              </li>

              <li>
                The project provides a basis for further mineralogical and
                geological investigation.
              </li>
            </ul>
          </div>

          <div>
            <DetailHeading>Deliverables</DetailHeading>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Geological Field Survey",
                "GPS Location Mapping",
                "Mineral Sample Documentation",
                "Geological Photography",
                "GIS Spatial Database",
                "Preliminary Mineral Assessment",
                "Exploration Site Documentation",
              ].map((item) => (
                <div
                  key={item}
                  className="
                    p-5
                    rounded-2xl
                    bg-[#07111f]
                    border
                    border-cyan-400/20
                    text-gray-300
                    hover:border-cyan-400/50
                    transition-all
                  "
                >
                  <span className="text-cyan-400 mr-2">◆</span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div>
            <DetailHeading>Tools & Technologies</DetailHeading>

            <div className="grid md:grid-cols-2 gap-6">
              <InfoBox
                title="GIS"
                value="ArcGIS / QGIS"
              />

              <InfoBox
                title="Survey"
                value="GPS / GNSS"
              />

              <InfoBox
                title="Remote Sensing"
                value="Satellite Imagery & DEM"
              />

              <InfoBox
                title="Field Work"
                value="Geological Reconnaissance & Sampling"
              />

              <InfoBox
                title="Analysis"
                value="Spatial Analysis & Geological Interpretation"
              />

              <InfoBox
                title="Documentation"
                value="Field Records, Samples & Geological Photography"
              />
            </div>
          </div>

          <div>
            <DetailHeading>Project Significance</DetailHeading>

            <p className="text-gray-300 leading-8">
              The project demonstrates how geology, GPS surveying, field
              sampling, remote sensing, and GIS can be integrated for gemstone
              exploration in mountainous environments. The resulting spatial
              documentation provides a structured starting point for future
              exploration and laboratory-based mineralogical investigation.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-gradient-to-r from-cyan-400/5 to-blue-500/5 border border-cyan-400/20">
            <DetailHeading>Important Geological Note</DetailHeading>

            <p className="text-gray-300 leading-8">
              "Emerald (Zamrud)" in this project refers to the reported or
              target mineral occurrence documented during preliminary field
              investigation. Definitive identification, commercial quality,
              and grade require appropriate laboratory testing.
            </p>
          </div>
        </section>

        <MoreProjects />
      </main>
    </div>
  );
};

// =========================================================
// MORE PROJECTS
// =========================================================

const MoreProjects = () => {
  return (
    <section className="max-w-6xl mx-auto p-2 md:p-6 mt-16 mb-10">
      <h3
        className="
          text-3xl
          font-bold
          mb-10
          bg-gradient-to-r
          from-white
          via-cyan-300
          to-blue-400
          bg-clip-text
          text-transparent
        "
      >
        More Projects
      </h3>

      <div className="grid md:grid-cols-2 gap-10">
        <motion.div
          whileHover={{ y: -6 }}
          className="
            bg-[#07111f]
            rounded-3xl
            overflow-hidden
            border
            border-cyan-400/20
            hover:border-cyan-400/50
            transition-all
            duration-300
          "
        >
          <img
            src="https://framerusercontent.com/images/sPBMYWlrLtEBuhJIu1Bkz9TUN4c.png"
            className="h-64 w-full object-cover"
            alt="GB Land Reform"
          />

          <div className="p-6">
            <h3 className="text-xl font-bold mb-3 text-white">
              GB Land Reform
            </h3>

            <p className="text-gray-400 text-sm leading-7">
              GB Land Reform Data Collection and Spatial Analysis in Gilgit,
              integrating GIS-based data collection, spatial analysis, and
              land-related mapping.
            </p>

            <div className="flex flex-wrap mt-7 gap-2">
              {[
                "GIS Data Collection",
                "Spatial Analysis",
                "Ortho Mosaicking",
              ].map((item) => (
                <span
                  key={item}
                  className="
                    px-3
                    py-1
                    text-xs
                    bg-cyan-400/10
                    border
                    border-cyan-400/20
                    rounded-full
                    text-cyan-300
                  "
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ y: -6 }}
          className="
            bg-[#07111f]
            rounded-3xl
            overflow-hidden
            border
            border-cyan-400/20
            hover:border-cyan-400/50
            transition-all
            duration-300
          "
        >
          <img
            src="https://framerusercontent.com/images/qYlZ1n3uAqXRhiOPVfli4GisaA.png"
            className="h-64 w-full object-cover"
            alt="3D Drone Modelling"
          />

          <div className="p-6">
            <h3 className="text-xl font-bold mb-3 text-white">
              3D Modelling Using Drone Imagery
            </h3>

            <p className="text-gray-400 text-sm leading-7">
              High-resolution 3D land modeling using drone imagery,
              photogrammetry, and GIS tools for urban planning.
            </p>

            <div className="flex flex-wrap mt-7 gap-2">
              {["Agisoft Metashape", "Pix4D", "DJI Modify"].map((item) => (
                <span
                  key={item}
                  className="
                    px-3
                    py-1
                    text-xs
                    bg-cyan-400/10
                    border
                    border-cyan-400/20
                    rounded-full
                    text-cyan-300
                  "
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// =========================================================
// LATEST PROJECT COMPONENT
// =========================================================

const LatestProject = memo(() => {
  const [activeProjectId, setActiveProjectId] = useState(null);

  const renderDetail = () => {
    switch (activeProjectId) {
      case 1:
        return (
          <GBLandReform
            onBack={() => setActiveProjectId(null)}
          />
        );

      case 2:
        return (
          <Drone3DProject
            onBack={() => setActiveProjectId(null)}
          />
        );

      case 3:
        return (
          <WebMappingProject
            onBack={() => setActiveProjectId(null)}
          />
        );

      case 4:
        return (
          <NegativeSlopeProject
            onBack={() => setActiveProjectId(null)}
          />
        );

      case 5:
        return (
          <SoapstoneMiningProject
            onBack={() => setActiveProjectId(null)}
          />
        );

      case 6:
        return (
          <EmeraldSurveyProject
            onBack={() => setActiveProjectId(null)}
          />
        );

      default:
        return null;
    }
  };

  return (
    <section
      className="
        relative
        bg-[#020617]
        text-white
        min-h-screen
        px-4
        md:px-6
        py-20
        overflow-x-hidden
      "
    >
      <FuturisticBackground />

      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[70%] h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_25px_rgba(34,211,238,0.6)]" />

      <AnimatePresence mode="wait">
        {!activeProjectId ? (
          <motion.div
            key="list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative z-10"
          >
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="
                  mb-20
                  text-4xl
                  md:text-5xl
                  font-extrabold
                  text-center
                  bg-gradient-to-r
                  from-white
                  via-cyan-300
                  to-blue-500
                  bg-clip-text
                  text-transparent
                  drop-shadow-[0_0_18px_rgba(34,211,238,0.15)]
                "
              >
                A Showcase Of My Latest Projects
              </motion.h2>
            </div>

            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
              {projects.map((p) => (
                <motion.div
                  key={p.id}
                  whileHover={{
                    scale: 1.025,
                    y: -5,
                  }}
                  onClick={() => setActiveProjectId(p.id)}
                  className="
                    group
                    cursor-pointer
                    bg-[#07111f]/95
                    rounded-3xl
                    overflow-hidden
                    border
                    border-cyan-400/20
                    hover:border-cyan-400/60
                    h-full
                    transition-all
                    duration-300
                    shadow-[0_0_30px_rgba(34,211,238,0.04)]
                    hover:shadow-[0_0_45px_rgba(34,211,238,0.12)]
                    backdrop-blur-sm
                  "
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="
                        h-96
                        w-full
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-105
                      "
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/80 via-transparent to-transparent opacity-80" />

                    <div className="absolute top-4 left-4">
                      <span
                        className="
                          px-3
                          py-1
                          rounded-full
                          text-xs
                          font-semibold
                          text-cyan-300
                          bg-[#020617]/80
                          border
                          border-cyan-400/30
                          backdrop-blur-md
                        "
                      >
                        PROJECT {String(p.id).padStart(2, "0")}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3
                      className="
                        text-xl
                        mb-3
                        font-bold
                        text-white
                        group-hover:text-cyan-300
                        transition-colors
                        duration-300
                      "
                    >
                      {p.title}
                    </h3>

                    <p className="text-gray-400 text-sm mb-5 leading-7">
                      {p.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {p.badges.map((b, i) => (
                        <span
                          key={i}
                          className="
                            px-3
                            py-1
                            text-xs
                            bg-cyan-400/10
                            border
                            border-cyan-400/20
                            rounded-full
                            text-cyan-300
                            transition-all
                            duration-300
                            group-hover:border-cyan-400/40
                          "
                        >
                          {b}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="detail"
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10"
          >
            {renderDetail()}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
});

export default LatestProject;