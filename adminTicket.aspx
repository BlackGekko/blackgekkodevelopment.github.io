<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

	<head>
		<title>Black Gekko Development</title>
		<link type="text/css" rel="stylesheet" href="adminTicket.css"/>
	</head>

	<body>
		<form id="form1" runat="server">
			<h1 class="mainHeader">Welcome to the Black Gekko Development Portal</h1>
				<div class="mainBody">
					<p>Please log in below</p>
						<asp:Login runat="server" id="Login1" BackColor="#F7F6F3" BorderColor="#E6E2D8" BorderPadding="4" BorderStyle="Solid" BorderWidth="1px" Font-Names="Verdana" Font-Size="0.8em" ForeColor="#333333">
							<InstructionTextStyle Font-Italic="True" ForeColor="Black" />
							<LoginButtonStyle BackColor="#FFFBFF" BorderColor="#CCCCCC" BorderStyle="Solid" BorderWidth="1px" Font-Names="Verdana" Font-Size="0.8em" ForeColor="#284775" />
							<TextBoxStyle Font-Size="0.8em" />
							<TitleTextStyle BackColor="#5D7B9D" Font-Bold="True" Font-Size="0.9em" ForeColor="White" />
						</asp:Login>
					
					<p> <a href ="createAccount.aspx">New to our company? Go ahead and create an account here</a></p>
				
					<p>Forget password?</p>
						<asp:PasswordRecovery runat="server" id="PasswordRecovery1" BackColor="#F7F6F3" BorderColor="#E6E2D8" BorderPadding="4" BorderStyle="Solid" BorderWidth="1px" Font-Names="Verdana" Font-Size="0.8em" Width="219px">
							<SubmitButtonStyle BackColor="#FFFBFF" BorderColor="#CCCCCC" BorderStyle="Solid" BorderWidth="1px" Font-Names="Verdana" Font-Size="0.8em" ForeColor="#284775" />
							<InstructionTextStyle Font-Italic="True" ForeColor="Black" />
							<SuccessTextStyle Font-Bold="True" ForeColor="#5D7B9D" />
							<TextBoxStyle Font-Size="0.8em" />
							<TitleTextStyle BackColor="#5D7B9D" Font-Bold="True" Font-Size="0.9em" ForeColor="White" />
						</asp:PasswordRecovery>
				</div>
		</form>
	</body>
</html>
