var microservicesDiagram = `

digraph classes {
  rankdir=BT
  node[shape=tripleoctagon]

  AccountService -> MySQL
  AccountService -> Redis
  AccountService -> RabbitMQ
}

`

var classDiagram = `

digraph classes {
  rankdir=BT
  node[shape=record]

  Users          -> ActiveRecordBase
  Address        -> ActiveRecordBase
  Product        -> ActiveRecordBase
  SpecialProduct -> Product
}

`
var checkoutDiagram1 = `

digraph checkout {
  ProductPage  -> Checkout
  Checkout     -> CalculateTax
  Checkout     -> ApplyCredit [label="[tax holiday]"]
  CalculateTax -> ApplyCredit
  ApplyCredit  -> ChargeCard
  ChargeCard   -> Checkout [label="[processor declined]"]
  ChargeCard   -> Success
}

`

var checkoutDiagram2 = `

digraph checkout2 {
  node[fontname="Avenir"]
  edge[fontname="Avenir"]

  ProductPage  -> Checkout
  Checkout     -> CalculateTax
  Checkout     -> ApplyCredit [label="[tax holiday]"
                               color=red
                               penwidth=2
                               style=dotted]
  CalculateTax -> ApplyCredit
  ApplyCredit  -> ChargeCard
  ChargeCard   -> Checkout [label="[processor declined]"
                            color=red
                            penwidth=2
                            style=dotted]
  ChargeCard   -> Success

  ProductPage [ shape=Mrecord
                label="{<f0> Product Page| <f1> Checkout Button}"]
  Checkout    [ shape=Mrecord
                label="{<f0> Checkout Page | <f1> Shows current cart}"]
  Success     [ shape=Mrecord
                label="{<f0> Success Page| <h1> Order number shown }"]
}

`

var g1Diagram = `

digraph g1 {
  // Use the radial layout instead
  // of the hierarchical one
  layout="circo";

  // The meat: these are the dependencies between
  // applications and services
  WMS -> InvLocService
  WMS -> CustomerService
  WMS -> ShippingLabels
  WMS -> ProductService
  WMS -> Checkout
  WMS -> Metrics
  WMS -> AddressService

  Clearance -> OrderService
  Clearance -> InvLocService
  PickAndShip -> PickingService
  PickAndShip -> Metrics
  PickingService -> OrderService
  PickingService -> InvLocService

  Admin -> SchedulingService
  Admin -> OrderService
  Admin -> ShippingLabels
  Admin -> ProductService
  Admin -> CustomerService

  OrderService -> ProductService
  OrderService -> ShippingLabels
  ProductService -> InvLocService

  // This forces a circular layout.
  // The "penwidth" and "arrowhead" settings
  // at the end of this ensure these
  // edges won't be visible.  But, they
  // will ensure the services are arranged
  // in a circle
  WMS ->
    Checkout ->
    InvLocService ->
    AddressService ->
    Metrics ->
    PickAndShip ->
    PickingService ->
    Clearance ->
    OrderService ->
    ShippingLabels ->
    Admin ->
    SchedulingService ->
    CustomerService ->
    ProductService -> WMS [penwidth=0 arrowhead=none];

  // Now, configure visuals for the apps and services.
  // We'll have the user-facing apps use a double circle
  // and the headless services use a single one

  WMS               [ shape=doublecircle];
  Clearance         [ shape=doublecircle];
  PickAndShip       [ shape=doublecircle];
  Admin             [ shape=doublecircle];
  Metrics           [ shape=doublecircle];

  InvLocService     [ shape=circle label="Inventory Locations"];
  PickingService    [ shape=circle label="Picking"];
  Checkout          [ shape=circle label="Financial Transactions"];
  OrderService      [ shape=circle label="Orders"];
  ShippingLabels    [ shape=circle label="Shippinng Labels"];
  SchedulingService [ shape=circle label="Scheduling"];
  CustomerService   [ shape=circle label="Customers"];
  ProductService    [ shape=circle label="Products"];
  AddressService    [ shape=circle label="Addresses"];
}

`

var polyculeDiagram = `

digraph polycule {
    rankdir=LR
    node [shape=plaintext]
    edge [arrowhead=none,arrowtail=none,dir=both,penwidth=3]
    subgraph cluster_01 {
        label = "Legend";
        key [label=<<table border="0" cellpadding="2" cellspacing="0" cellborder="0">
          <tr><td align="right" port="coparenting">Co-Parenting</td></tr>
          <tr><td align="right" port="anchorpartners">Anchor Partners</td></tr>
          <tr><td align="right" port="currentlovers">Current Lovers</td></tr>
          <tr><td align="right" port="pastlovers">Past Lovers</td></tr>
          <tr><td align="right" port="cohabitating">Cohabitating</td></tr>
          <tr><td align="right" port="monogamous">Monogamous</td></tr>
          <tr><td align="right" port="asexualromance">Asexual Romance</td></tr>
          <tr><td align="right" port="longdistancerelationship">Long Distance Relationship</td></tr>
          <tr><td align="right" port="crush">Crush</td></tr>
          </table>>]
        key2 [label=<<table border="0" cellpadding="2" cellspacing="0" cellborder="0">
          <tr><td align="left" port="coparenting">&nbsp;</td></tr>
          <tr><td align="left" port="anchorpartners">&nbsp;</td></tr>
          <tr><td align="left" port="currentlovers">&nbsp;</td></tr>
          <tr><td align="left" port="pastlovers">&nbsp;</td></tr>
          <tr><td align="left" port="cohabitating">&nbsp;</td></tr>
          <tr><td align="left" port="monogamous">&nbsp;</td></tr>
          <tr><td align="left" port="asexualromance">&nbsp;</td></tr>
          <tr><td align="left" port="longdistancerelationship">&nbsp;</td></tr>
          <tr><td align="left" port="crush">&nbsp;</td></tr>
          </table>>]
    }
    node [shape=circle]
    subgraph coparenting {
        edge [color=blue];
        key:coparenting:e -> key2:coparenting:w;
        Emma -> Alex -> Lilly -> Emma;
        Kimchi -> Vajra -> Mary;
        Vazna -> SamE;
        Tulsi -> Aziz;
    }
    subgraph anchorpartners {
        edge [color=magenta,style=dashed];
        key:anchorpartners:e -> key2:anchorpartners:w;
        Emma -> Alex;
        Kimchi -> Vajra;
        Dean -> Jean;
        Tulsi -> Aziz;
    }
    subgraph currentlovers {
        edge [color=orange];
        key:currentlovers:e -> key2:currentlovers:w;
        Emma -> Alex -> Lilly -> Emma;
        Lilly -> Sherman;
        Izzabeth -> Nora -> Marco -> Crystal -> Nora;
        Izzabeth -> Marco -> Baxter -> Crystal;
        Baxter -> Nora;
        Luuk -> Amalthea;
        Dean -> Jean -> Lino;
        Tulsi -> Aziz;
        Vazna -> SamE;
        Kimchi -> Vajra;
    }
    subgraph pastlovers {
        edge [color=green];
        key:pastlovers:e -> key2:pastlovers:w;
        Izzabeth -> Lilly -> Soliloquy -> Baxter -> Amalthea -> Vajra -> Mary;
        Marco -> Soliloquy -> Crystal;
        Lilly -> Baxter;
        Sherman -> Kimchi -> Vash;
    }
    subgraph cohabitating {
        edge [color=red];
        key:cohabitating:e -> key2:cohabitating:w;
        Emma -> Alex -> Lilly -> Emma;
        Kimchi -> Vajra;
        Tulsi -> Aziz;
        Vazna -> SamE;
    }
    subgraph monogamous {
        edge [color=blue,style=dashed];
        key:monogamous:e -> key2:monogamous:w;
        Vazna -> SamE;
    }
    subgraph asexualromance {
        edge [color=black];
        key:asexualromance:e -> key2:asexualromance:w;
        Ace -> Marco;
    }
    subgraph longdistancerelationship {
        edge [color=orange,style=dashed];
        key:longdistancerelationship:e -> key2:longdistancerelationship:w;
        Vajra -> Jean;
        Dean -> Jean;
    }
    subgraph crush {
        edge [color=pink,arrowhead=normal,dir=forward];
        key:crush:e -> key2:crush:w;
    }
}

`
