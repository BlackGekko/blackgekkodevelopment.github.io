<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<%@ Page Language="C#" %>
<html dir="ltr" xmlns="http://www.w3.org/1999/xhtml">

	<head runat="server">
	</head>

	<body>

	<form id="form1" runat="server">
		<asp:CreateUserWizard runat="server" id="CreateUserWizard1"> <WizardSteps> <asp:CreateUserWizardStep runat="server"/> <asp:CompleteWizardStep runat="server"/> </WizardSteps> </asp:CreateUserWizard>
	</form>

	</body>

</html>
