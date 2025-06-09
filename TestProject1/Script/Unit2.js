function Test1()
{
  var Var1;
  Var1 = 1234;
  //Launches the specified browser and opens the specified URL in it.
  Browsers.Item(btEdge).Run("https://support.smartbear.com/testcomplete/docs/working-with/integration/azure/test-adapter/requirements.html");
  //Simulates a left-button single click in a window or control as specified (relative position, shift keys).
  Aliases.browser.pageIntegrationWithAzureDevopsAn.textnodeTestcompleteDocumentatio.textnodeGeneralInformation.linkGeneralInformation.Click();
  //Posts an information message to the test log.
  Log.Message(Var1, "");
}