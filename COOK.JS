<%
   // Create cookies for first and last names.      
   var firstName = new Cookie("first_name", request.getParameter("first_name"));
   C lastName = new Cookie("last_name", request.getParameter("last_name"));
   
   // Set expiry date after 24 Hrs for both the cookies.
   firstName.setMaxAge(60*60*24); 
   lastName.setMaxAge(60*60*24); 
   
   // Add both the cookies in the response header.
   response.addCookie( firstName );
   response.addCookie( lastName );
%>
