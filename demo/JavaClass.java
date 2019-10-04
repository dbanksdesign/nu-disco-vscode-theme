package demo;

import java.lang.Object;

/**
 * @param foo = bar
 */
public class JavaClass extends Object {
    private final String PAGE_COMPONENT_ID = "sampleEmptyPageId";

    @Response(SampleUrls.EMPTY_URL)
    public String handleRequest() throws Exception {

        final GenericPageFrameworkBuilder page = GenericPageFrameworkBuilderFactory.createBuilder(getAppVersion())
                .withTitle("Empty Page")
                // add components in here
                .withComponentId(PAGE_COMPONENT_ID);

        return generateResponse(page);
    }
}
