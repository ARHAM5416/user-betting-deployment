import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="images/brand/favicon.ico"
        />
        <link
          id="style"
          href="plugins/bootstrap/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link href="css/style.css" rel="stylesheet" />
        <link href="css/dark-style.css" rel="stylesheet" />
        <link href="css/icons.css" rel="stylesheet" />
        <link
          id="theme"
          rel="stylesheet"
          type="text/css"
          media="all"
          href="colors/color1.css"
        />
      </Head>
      <body>
        <Main />
        <NextScript />

        <script src="js/jquery.min.js"></script>

        <script src="plugins/bootstrap/js/popper.min.js"></script>
        <script src="plugins/bootstrap/js/bootstrap.min.js"></script>

        <script src="js/jquery.sparkline.min.js"></script>

        <script src="js/sticky.js"></script>

        <script src="js/circle-progress.min.js"></script>

        <script src="plugins/peitychart/jquery.peity.min.js"></script>
        <script src="plugins/peitychart/peitychart.init.js"></script>

        <script src="plugins/sidebar/sidebar.js"></script>

        <script src="plugins/p-scroll/perfect-scrollbar.js"></script>
        <script src="plugins/p-scroll/pscroll.js"></script>
        <script src="plugins/p-scroll/pscroll-1.js"></script>

        <script src="plugins/chart/Chart.bundle.js"></script>
        <script src="plugins/chart/rounded-barchart.js"></script>
        <script src="plugins/chart/utils.js"></script>

        <script src="plugins/select2/select2.full.min.js"></script>

        <script src="plugins/datatable/js/jquery.dataTables.min.js"></script>
        <script src="plugins/datatable/js/dataTables.bootstrap5.js"></script>
        <script src="plugins/datatable/dataTables.responsive.min.js"></script>

        <script src="js/apexcharts.js"></script>
        <script src="plugins/apexchart/irregular-data-series.js"></script>

        <script src="plugins/charts-c3/d3.v5.min.js"></script>
        <script src="plugins/charts-c3/c3-chart.js"></script>

        <script src="js/charts.js"></script>

        <script src="plugins/flot/jquery.flot.js"></script>
        <script src="plugins/flot/jquery.flot.fillbetween.js"></script>
        <script src="plugins/flot/chart.flot.sampledata.js"></script>
        <script src="plugins/flot/dashboard.sampledata.js"></script>

        <script src="plugins/jvectormap/jquery-jvectormap-2.0.2.min.js"></script>
        <script src="plugins/jvectormap/jquery-jvectormap-world-mill-en.js"></script>

        <script src="plugins/sidemenu/sidemenu.js"></script>

        {/* <script src="js/index1.js"></script> */}

        <script src="js/themeColors.js"></script>

        <script src="js/custom.js"></script>
      </body>
    </Html>
  );
}
