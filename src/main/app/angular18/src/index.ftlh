<#import "/spring.ftl" as spring>
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Angular18</title>
  <base href="<@spring.url '/'/>">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
  
  
  	<% for (key in htmlWebpackPlugin.files.css) { %>
  	<% if(htmlWebpackPlugin.files.css[key]) { %>
  	<link rel="stylesheet" href="<@spring.url '/<%= htmlWebpackPlugin.files.css[key] %>'/>">
  	<%}%>
  	<%}%>
  	
  	<script>
  	window.spaAppProperties = {
  		baseUrl : "<@spring.url ''/>",
  		appBaseUrl: location.origin,
  		landPage: "<%= htmlWebpackPlugin.options.landPage %>"
  	}
  	</script>
  	
</head>
<body class="mat-typography">
  <app-root></app-root>
  <% for (key in htmlWebpackPlugin.files.js) { %>
  <% if(htmlWebpackPlugin.files.js[key]) { %>
  <script src="<@spring.url '/<%=htmlWebpackPlugin.files.js[key] %>'/>" type="text/javascript"></script>
  <%}%>
  <%}%>
</body>
</html>
